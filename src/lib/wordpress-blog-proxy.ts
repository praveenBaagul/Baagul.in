import { load } from 'cheerio'

const PREFIX = '/blog'
const MINUTE = 60_000
const MAX_HTML = 3 * 1024 * 1024
const MAX_ASSET = 30 * 1024 * 1024
const MAX_CACHE = 24 * 1024 * 1024
const MAX_ENTRY = 2 * 1024 * 1024
const MAX_ENTRIES = 250
const REDIRECT = new Set([301, 302, 303, 307, 308])
const CONTENT_QUERY = new Set(['s', 'p', 'page_id', 'page', 'paged', 'cpage', 'cat', 'tag', 'author', 'm', 'year', 'monthnum', 'day', 'name', 'category_name'])
const ASSET_QUERY = new Set(['ver', 'v', 'version'])
const STATIC = /\.(?:css|m?js|png|jpe?g|gif|webp|avif|ico|svg|woff2?|ttf|otf|eot|pdf|mp[34]|webm|ogg)$/i
const UPLOAD = /\.(?:png|jpe?g|gif|webp|avif|ico|svg|pdf|mp[34]|webm|ogg)$/i
const XML = /(?:^|\/)(?:feed\/?|[^/]+\.xml)$/i
const RESERVED = /(?:^|\/)(?:wp-admin|wp-json|wp-login(?:\.php)?|wp-config(?:\.php)?|xmlrpc(?:\.php)?|wp-cron(?:\.php)?|wp-trackback(?:\.php)?|wp-signup(?:\.php)?|wp-activate(?:\.php)?|wp-register(?:\.php)?|wp-mail(?:\.php)?|readme\.html|license\.txt|robots\.txt)(?:\/|$)/i
const PRIVATE_QUERY = /^(?:preview(?:_.*)?|_wpnonce|rest_route|post_password|action|customize_.*)$/i

const origin = (value: string) => {
  const url = new URL(value)
  if (
    !['https:', 'http:'].includes(url.protocol) ||
    (url.protocol === 'http:' && !['localhost', '127.0.0.1'].includes(url.hostname)) ||
    url.username || url.password || url.pathname !== '/' || url.search || url.hash
  ) throw new Error('Expected an HTTPS origin without a path or credentials')
  return url
}

function getConfig() {
  const upstream = origin(process.env.WORDPRESS_BLOG_ORIGIN || 'https://honest-yellowgreen-dinosaur-65.hostingersite.com')
  const site = origin(process.env.BLOG_PUBLIC_ORIGIN || 'https://baagul.in')
  if (upstream.origin === site.origin) throw new Error('WordPress and the public site must use different origins')
  return {
    upstream, site,
    trailing: process.env.BLOG_TRAILING_SLASH === '1',
    comments: process.env.BLOG_ENABLE_COMMENTS === '1',
    originNoindex: process.env.BLOG_STRIP_ORIGIN_NOINDEX_HEADER === '1',
  }
}
type Config = ReturnType<typeof getConfig>
type Kind = 'page' | 'asset' | 'utility' | 'comment'
type ProxyResult = { status: number; headers: Headers; body: Uint8Array | null; fresh: number; stale: number }
type Entry = { result: ProxyResult; stored: number; size: number }

const entries = new Map<string, Entry>()
const pending = new Map<string, Promise<ProxyResult>>()
let cacheBytes = 0
const fetchOrigin = (url: URL, init?: RequestInit) => fetch(url, {
  ...init, redirect: 'manual', cache: 'no-store', signal: AbortSignal.timeout(10_000),
})

export function blogContentSecurityPolicy(upstream?: URL) {
  // A full WordPress theme needs inline CSS and often inline JS. This policy
  // intentionally does not grant unsafe-eval, arbitrary script hosts or frames.
  const originHost = upstream ? ` ${upstream.origin}` : ''
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "frame-src 'none'",
    "form-action 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    `img-src 'self' data:${originHost}`,
    "font-src 'self' data:",
    "connect-src 'self'",
    "media-src 'self'",
  ].join('; ')
}

function validPath(path: string) {
  if (!path.startsWith('/') || path.includes('//') || path.length > 2048) return false
  try {
    return path.split('/').every((segment) => {
      const s = decodeURIComponent(segment)
      return s !== '.' && s !== '..' && !/[\/\\%\u0000-\u001F\u007F]/.test(s) && !s.startsWith('.')
    })
  } catch { return false }
}

function classify(path: string): Kind | null {
  if (!validPath(path)) return null
  const decoded = decodeURIComponent(path)
  if (decoded === '/wp-comments-post.php') return 'comment'
  if (RESERVED.test(decoded) || /(?:^|\/)[^/]+\.(?:php\d*|phtml|phar|bak|sql|ini|log|zip)(?:\/|$)/i.test(decoded)) return null
  if (/^\/(?:wp-content|wp-includes)(?:\/|$)/i.test(decoded)) {
    const validExtension = /^\/wp-content\/uploads\//i.test(decoded) ? UPLOAD : STATIC
    return validExtension.test(decoded) ? 'asset' : null
  }
  if (/^\/favicon\.ico$/i.test(decoded)) return 'asset'
  if (XML.test(decoded)) return 'utility'
  return 'page'
}

function forwardedSearch(query: URLSearchParams, kind: Kind) {
  const allow = kind === 'asset' ? ASSET_QUERY : CONTENT_QUERY
  const result = new URLSearchParams()
  for (const [key, value] of query) {
    if (allow.has(key) && value.length <= 512 && !result.has(key)) result.set(key, value)
  }
  result.sort()
  return result.toString()
}

function publicPath(path: string, config: Config) {
  const normalized = path.replace(/\/+$/, '')
  const isDocument = !normalized || (!STATIC.test(normalized) && !/\.(?:xml|php)$/i.test(normalized))
  return PREFIX + normalized + (isDocument && config.trailing ? '/' : '')
}

function mapOriginUrl(url: URL, config: Config, full = false) {
  const result = publicPath(url.pathname, config) + url.search + url.hash
  return full ? config.site.origin + result : result
}

function isUpstream(url: URL, config: Config) {
  return (url.protocol === 'http:' || url.protocol === 'https:') &&
    url.hostname === config.upstream.hostname &&
    ((!url.port && !config.upstream.port) || url.port === config.upstream.port) &&
    !url.username && !url.password
}

function resourceUrl(raw: string, from: URL, config: Config, full = false) {
  const value = raw.trim()
  if (!value || value.startsWith('#') || /^(?:data|blob|mailto|tel|javascript):/i.test(value)) return raw
  try {
    const target = new URL(value, from)
    if (isUpstream(target, config)) return mapOriginUrl(target, config, full)
    return raw
  } catch { return raw }
}

function rewriteCss(css: string, from: URL, config: Config) {
  return css
    .replace(/url\(\s*(?:(["'])(.*?)\1|([^)]*))\s*\)/gi, (_all, quote: string | undefined, quoted: string | undefined, bare: string | undefined) => {
      const delimiter = quote || ''
      const value = quoted ?? bare?.trim() ?? ''
      return `url(${delimiter}${resourceUrl(value, from, config)}${delimiter})`
    })
    .replace(/(@import\s+)(["'])(.*?)\2/gi, (_all, before: string, quote: string, value: string) => {
      return before + quote + resourceUrl(value, from, config) + quote
    })
}

function escapeRegex(text: string) { return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }

function rewriteScript(text: string, from: URL, config: Config) {
  // Absolute links in JSON-LD and JS settings. Leave external hosts and code
  // otherwise untouched, and preserve JSON slash escaping where present.
  const host = escapeRegex(config.upstream.host)
  const token = new RegExp(`(?:https?:)?//${host}(?=[/\\s"'?#<>\\\\]|$)[^\\s"'<>\\\\]*`, 'gi')
  const slash = '\\/'
  const escapedSlash = escapeRegex(slash)
  const escapedToken = new RegExp(`(?:https?:)?${escapedSlash}${escapedSlash}${host}(?=${escapedSlash}|[\\s"'?#<>,;}\\]]|$)(?:${escapedSlash}|[^\\s"'<>\\\\,;}\\]])*`, 'gi')
  return text
    .replace(escapedToken, (url) => resourceUrl(url.split(slash).join('/'), from, config, true).split('/').join(slash))
    .replace(token, (url) => resourceUrl(url, from, config, true))
}

function rewriteSrcset(value: string, from: URL, config: Config) {
  // Keep data-URL commas inside a candidate. Descriptor commas delimit
  // candidates after the URL token; whitespace is required before descriptors.
  return value.replace(/(^|,\s*)((?:data:[^\s]+|[^\s,]+))(\s+(?:\d+w|\d*\.?\d+x|\d+h))?/gi,
    (_all, lead: string, url: string, descriptor?: string) =>
      lead + resourceUrl(url, from, config) + (descriptor || ''))
}

function rewriteHtml(html: string, from: URL, config: Config, indexable: boolean, isSearch: boolean) {
  const $ = load(html)
  const baseHref = $('base[href]').first().attr('href')
  let base = from
  if (baseHref) {
    try {
      const candidate = new URL(baseHref, from)
      if (isUpstream(candidate, config)) base = candidate
    } catch { /* Leave the upstream document URL as the default. */ }
  }
  $('base').remove()

  const attrs = ['href', 'src', 'action', 'poster', 'data-src', 'data-lazy-src', 'data-original', 'data-href', 'xlink:href', 'cite']
  for (const attr of attrs) {
    $(attr === 'xlink:href' ? '[xlink\\:href]' : `[${attr}]`).each((_, el) => {
      const element = $(el)
      element.attr(attr, resourceUrl(element.attr(attr) || '', base, config))
    })
  }
  for (const attr of ['srcset', 'data-srcset', 'imagesrcset']) {
    $(`[${attr}]`).each((_, el) => {
      const element = $(el)
      element.attr(attr, rewriteSrcset(element.attr(attr) || '', base, config))
    })
  }
  $('[style]').each((_, el) => {
    const element = $(el)
    element.attr('style', rewriteCss(element.attr('style') || '', base, config))
  })
  $('style').each((_, el) => {
    const element = $(el)
    element.html(rewriteCss(element.html() || '', base, config))
  })
  $('script:not([src])').each((_, el) => {
    const element = $(el)
    element.html(rewriteScript(element.html() || '', base, config))
  })
  // Some theme/plugin attributes contain serialized settings rather than URLs.
  $('[data-settings], [data-config], [data-wp-context]').each((_, el) => {
    const element = $(el)
    for (const key of ['data-settings', 'data-config', 'data-wp-context']) {
      const value = element.attr(key)
      if (value) element.attr(key, rewriteScript(value, base, config))
    }
  })
  $('meta[property], meta[name], meta[itemprop]').each((_, el) => {
    const element = $(el)
    const key = (element.attr('property') || element.attr('name') || element.attr('itemprop') || '').toLowerCase()
    if (/^(?:og:(?:url|image(?::(?:secure_url|url))?|video(?::(?:secure_url|url))?|audio(?::(?:secure_url|url))?)|twitter:(?:url|image(?::src)?|player(?::stream)?)|image|url)$/.test(key)) {
      element.attr('content', resourceUrl(element.attr('content') || '', base, config, true))
    }
  })
  $('meta[http-equiv]').filter((_, el) => ($(el).attr('http-equiv') || '').toLowerCase() === 'refresh').remove()

  const canonical = $('link[rel~="canonical"]')
  let canonicalTarget = new URL(from)
  const previous = canonical.first().attr('href')
  if (previous) {
    try {
      const candidate = new URL(previous, config.site)
      if (candidate.origin === config.site.origin && (candidate.pathname === PREFIX || candidate.pathname.startsWith(PREFIX + '/'))) {
        const candidatePath = candidate.pathname.slice(PREFIX.length) || '/'
        if (classify(candidatePath) === 'page') {
          canonicalTarget = new URL(config.upstream)
          canonicalTarget.pathname = candidatePath
          canonicalTarget.search = candidate.search
        }
      }
    } catch { /* Use the fetched page URL. */ }
  }
  canonical.remove()
  if (indexable && !isSearch) {
    if (!canonicalTarget.search || previous) {
      // Do not let marketing, preview or other unapproved parameters into canonicals.
      canonicalTarget.search = forwardedSearch(canonicalTarget.searchParams, 'page')
    }
    const link = $('<link rel="canonical">').attr('href', mapOriginUrl(canonicalTarget, config, true))
    $('head').append(link)
  }
  if (isSearch || !indexable) $('head').append('<meta name="robots" content="noindex">')

  const currentTitle = $('title').first()
  const title = currentTitle.text().replace(new RegExp(escapeRegex(config.upstream.hostname), 'gi'), 'Baagul Blog').trim()
  if (currentTitle.length) currentTitle.text(title || 'Baagul Blog')
  else $('head').append('<title>Baagul Blog</title>')

  // If comments are not enabled, do not show a form that would submit to a blocked route.
  if (!config.comments) $('form[action]').filter((_, el) =>
    /\/wp-comments-post\.php(?:[?#]|$)/i.test($(el).attr('action') || '')).remove()

  return $.html()
}

function rewriteXml(xml: string, from: URL, config: Config) {
  // Rewrite same-origin URLs in XML, feeds and embedded HTML. Keep external GUIDs.
  return rewriteScript(xml, from, config)
}

function contentTypeMatches(type: string, path: string, kind: Kind) {
  if (kind === 'page' || kind === 'comment') return type === 'text/html' || type === 'application/xhtml+xml'
  if (kind === 'utility') return /^(?:text\/xml|application\/(?:xml|rss\+xml|atom\+xml))$/.test(type)
  if (/\.css$/i.test(path)) return type === 'text/css'
  if (/\.m?js$/i.test(path)) return /^(?:text|application)\/(?:java|ecma)script$/.test(type) || type === 'application/x-javascript'
  if (/\.(?:woff2?|ttf|otf|eot)$/i.test(path)) return /^(?:font\/|application\/(?:font-|x-font-|vnd\.ms-fontobject|octet-stream))/.test(type)
  if (/\.pdf$/i.test(path)) return type === 'application/pdf'
  if (/\.(?:mp[34]|webm|ogg)$/i.test(path)) return /^(?:audio|video)\//.test(type) || type === 'application/ogg'
  return /^image\/(?:png|jpeg|gif|webp|avif|svg\+xml|x-icon|vnd\.microsoft\.icon)$/.test(type)
}

async function readBounded(body: ReadableStream<Uint8Array> | null, limit: number) {
  if (!body) return new Uint8Array()
  const reader = body.getReader()
  const parts: Uint8Array[] = []
  let size = 0
  try {
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      size += value.byteLength
      if (size > limit) {
        await reader.cancel()
        throw new Error('Body exceeded the configured limit')
      }
      parts.push(value)
    }
  } finally { reader.releaseLock() }
  const result = new Uint8Array(size)
  let offset = 0
  for (const part of parts) { result.set(part, offset); offset += part.byteLength }
  return result
}

function failure(status: number, message: string): ProxyResult {
  return {
    status,
    headers: new Headers({
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'X-Robots-Tag': 'noindex',
    }),
    body: new TextEncoder().encode(message),
    fresh: 0,
    stale: 0,
  }
}

function safeLocation(location: string, from: URL, config: Config) {
  try {
    const target = new URL(location, from)
    if (target.origin === config.site.origin && (target.pathname === PREFIX || target.pathname.startsWith(PREFIX + '/'))) {
      const path = target.pathname.slice(PREFIX.length) || '/'
      if (classify(path) !== 'page' && classify(path) !== 'utility' && classify(path) !== 'asset') return null
      const rebuilt = new URL(config.upstream)
      rebuilt.pathname = path
      rebuilt.search = target.search
      rebuilt.hash = target.hash
      return rebuilt
    }
    if (!isUpstream(target, config) || !classify(target.pathname) || classify(target.pathname) === 'comment') return null
    const rebuilt = new URL(config.upstream)
    rebuilt.pathname = target.pathname
    rebuilt.search = target.search
    rebuilt.hash = target.hash
    return rebuilt
  } catch { return null }
}

async function fetchProxy(
  target: URL, kind: Kind, config: Config,
  postBody?: Awaited<ReturnType<typeof readBounded>>,
): Promise<ProxyResult> {
  let from = target
  for (let attempt = 0; attempt < 4; attempt++) {
    const wp = await fetchOrigin(from, {
      method: postBody ? 'POST' : 'GET',
      headers: postBody ? { 'Content-Type': 'application/x-www-form-urlencoded' } : undefined,
      body: postBody,
    })
    const location = wp.headers.get('location')
    if (REDIRECT.has(wp.status)) {
      await wp.body?.cancel()
      if (!location) return failure(502, 'WordPress returned an invalid redirect')
      const next = safeLocation(location, from, config)
      if (!next) return failure(502, 'WordPress returned a redirect outside the public blog')
      const nextKind = classify(next.pathname)
      if (!nextKind || Array.from(next.searchParams.keys()).some((key) => PRIVATE_QUERY.test(key))) {
        return failure(502, 'WordPress returned a non-public redirect')
      }
      // Avoid a loop with Next.js removing the slash that WordPress adds.
      if (!postBody && next.origin === from.origin && next.href !== from.href &&
          publicPath(next.pathname, config) === publicPath(from.pathname, config) &&
          next.search === from.search && !next.hash) {
        from = next
        continue
      }
      if (!postBody && mapOriginUrl(next, config) === mapOriginUrl(from, config)) return failure(502, 'WordPress redirect loop')
      return {
        status: wp.status,
        headers: new Headers({ Location: mapOriginUrl(next, config), 'Cache-Control': 'no-store' }),
        body: null, fresh: 0, stale: 0,
      }
    }
    if (wp.status >= 500 || wp.status === 429) {
      await wp.body?.cancel()
      return failure(503, 'Blog temporarily unavailable')
    }
    const type = (wp.headers.get('content-type') || '').split(';')[0].trim().toLowerCase()
    if (!wp.body || !contentTypeMatches(type, decodeURIComponent(from.pathname), kind)) {
      await wp.body?.cancel()
      return failure(wp.status >= 400 ? wp.status : 502, wp.status === 404 ? 'Not found' : 'Unexpected WordPress response')
    }
    const bytes = await readBounded(wp.body, kind === 'asset' ? MAX_ASSET : MAX_HTML)
    const doc = kind === 'page' || kind === 'comment'
    const markup = doc || kind === 'utility' || type === 'text/css'
    const encoded = new TextDecoder().decode(markup ? bytes : new Uint8Array())
    const isSearch = from.searchParams.has('s')
    const body = markup
      ? new TextEncoder().encode(doc
        ? rewriteHtml(encoded, from, config, wp.status === 200 && !postBody, isSearch)
        : kind === 'utility' ? rewriteXml(encoded, from, config) : rewriteCss(encoded, from, config))
      : bytes
    const headers = new Headers({
      'Content-Type': doc ? 'text/html; charset=utf-8' : markup ? `${type}; charset=utf-8` : type,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-store',
    })
    if (doc) headers.set('Content-Security-Policy', blogContentSecurityPolicy(config.upstream))
    if (type === 'image/svg+xml') headers.set('Content-Security-Policy', "sandbox; default-src 'none'")
    if (type === 'application/pdf') {
      headers.set('Content-Disposition', 'attachment')
      headers.set('Content-Security-Policy', "sandbox; default-src 'none'")
    }
    if (wp.status !== 200 || isSearch || postBody || kind === 'utility' || type === 'image/svg+xml') {
      headers.set('X-Robots-Tag', 'noindex')
    } else {
      const robots = wp.headers.get('x-robots-tag')
      if (robots && !(config.originNoindex && robots.trim().toLowerCase() === 'noindex')) {
        headers.set('X-Robots-Tag', robots)
      }
    }
    const policy = wp.headers.get('cache-control') || ''
    const vary = (wp.headers.get('vary') || '').split(',').map((v) => v.trim().toLowerCase())
    const canCache = wp.status === 200 && !postBody && !isSearch &&
      !wp.headers.has('set-cookie') && !/\b(?:private|no-store|no-cache)\b/i.test(policy) &&
      !vary.some((v) => v && v !== 'accept-encoding')
    const fresh = canCache ? (kind === 'asset' ? 24 * 60 : 5) * MINUTE : 0
    const stale = canCache && kind !== 'asset' ? 60 * MINUTE : fresh
    if (canCache && kind === 'asset') headers.set('Cache-Control', 'public, max-age=604800')
    else if (canCache) headers.set('Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=3300')
    return { status: wp.status, headers, body, fresh, stale }
  }
  return failure(502, 'WordPress redirect loop')
}

function save(key: string, result: ProxyResult) {
  const previous = entries.get(key)
  if (previous) { cacheBytes -= previous.size; entries.delete(key) }
  const size = result.body?.byteLength || 0
  if (!result.fresh || size > MAX_ENTRY) return
  while (entries.size >= MAX_ENTRIES || cacheBytes + size > MAX_CACHE) {
    const oldest = entries.keys().next().value
    if (!oldest) break
    cacheBytes -= entries.get(oldest)!.size
    entries.delete(oldest)
  }
  entries.set(key, { result, size, stored: Date.now() })
  cacheBytes += size
}

function responseFor(result: ProxyResult, head: boolean, cache: string) {
  const headers = new Headers(result.headers)
  headers.set('X-Baagul-Blog-Cache', cache)
  return new Response(head ? null : result.body as BodyInit | null, { headers, status: result.status })
}

export async function proxyBlog(request: Request) {
  const head = request.method === 'HEAD'
  const post = request.method === 'POST'
  const url = new URL(request.url)
  let config: Config
  try { config = getConfig() } catch { return responseFor(failure(500, 'Invalid blog configuration'), head, 'BYPASS') }
  if (url.pathname !== PREFIX && !url.pathname.startsWith(PREFIX + '/')) return responseFor(failure(404, 'Not found'), head, 'BYPASS')
  const path = url.pathname.slice(PREFIX.length) || '/'
  const kind = classify(path)
  if (!kind || Array.from(url.searchParams.keys()).some((key) => PRIVATE_QUERY.test(key))) {
    return responseFor(failure(404, 'Not found'), head, 'BYPASS')
  }
  if (kind === 'comment' && (!post || !config.comments)) return responseFor(failure(404, 'Not found'), head, 'BYPASS')
  if (post && kind !== 'comment') {
    const result = failure(405, 'Method not allowed')
    result.headers.set('Allow', 'GET, HEAD')
    return responseFor(result, false, 'BYPASS')
  }

  const target = new URL(config.upstream)
  target.pathname = path
  target.search = forwardedSearch(url.searchParams, kind)
  if (post) {
    if (request.headers.get('origin') !== config.site.origin) return responseFor(failure(403, 'Invalid origin'), false, 'BYPASS')
    if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/x-www-form-urlencoded') {
      return responseFor(failure(415, 'Unsupported form type'), false, 'BYPASS')
    }
    let input: Awaited<ReturnType<typeof readBounded>>
    try { input = await readBounded(request.body, 64 * 1024) }
    catch { return responseFor(failure(413, 'Comment is too large'), false, 'BYPASS') }
    try { return responseFor(await fetchProxy(target, kind, config, input), false, 'BYPASS') }
    catch { return responseFor(failure(503, 'Blog temporarily unavailable'), false, 'BYPASS') }
  }

  const key = [config.site.origin, config.trailing, config.comments, config.originNoindex, target.href].join('|')
  const search = target.searchParams.has('s')
  if (search) {
    try { return responseFor(await fetchProxy(target, kind, config), head, 'BYPASS') }
    catch { return responseFor(failure(503, 'Blog temporarily unavailable'), head, 'BYPASS') }
  }
  const refresh = () => {
    let promise = pending.get(key)
    if (!promise) {
      promise = fetchProxy(target, kind, config)
        .catch(() => failure(503, 'Blog temporarily unavailable'))
        .then((result) => { if (result.status < 500) save(key, result); return result })
        .finally(() => pending.delete(key))
      pending.set(key, promise)
    }
    return promise
  }
  const cached = entries.get(key)
  if (cached) {
    const age = Date.now() - cached.stored
    if (age < cached.result.fresh) return responseFor(cached.result, head, 'HIT')
    if (age < cached.result.stale) {
      // On a persistent Node server; background refresh is not guaranteed on serverless.
      void refresh()
      return responseFor(cached.result, head, 'STALE')
    }
  }

  return responseFor(await refresh(), head, 'MISS')
}
