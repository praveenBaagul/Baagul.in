export type BlogPost = {
  id: number
  titleHtml: string
  excerptHtml: string
  slug: string
  url: string
  publishedAt: string
  lastModified: string
}

type WordPressPost = {
  id: number
  slug: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string; protected?: boolean }
  content?: { protected?: boolean }
  date_gmt: string | null
  modified_gmt: string | null
  status: string
}

const wordPressOrigin = () => new URL(process.env.WORDPRESS_BLOG_ORIGIN || 'https://honest-yellowgreen-dinosaur-65.hostingersite.com')
const publicOrigin = () => new URL(process.env.BLOG_PUBLIC_ORIGIN || 'https://baagul.in')

function pathForPost(post: WordPressPost) {
  // Respect the WordPress permalink structure when WordPress returns a path.
  const upstream = wordPressOrigin()
  const permalink = new URL(post.link, upstream)
  if (permalink.origin !== upstream.origin || (!permalink.search && permalink.pathname === '/')) return null
  const path = permalink.pathname.replace(/\/+$/, '')
  if (path === '' && !permalink.searchParams.has('p')) return null
  const suffix = process.env.BLOG_TRAILING_SLASH === '1' ? '/' : ''
  return new URL('/blog' + path + suffix + permalink.search, publicOrigin()).href
}

function gmt(value: string | null) {
  if (!value) return ''
  const parsed = new Date(value.endsWith('Z') ? value : value + 'Z')
  return Number.isNaN(parsed.valueOf()) ? '' : parsed.toISOString()
}

export async function fetchWordPressBlogPosts(options: { search?: string; all?: boolean; limit?: number } = {}): Promise<BlogPost[]> {
  const endpoint = new URL('/wp-json/wp/v2/posts', wordPressOrigin())
  endpoint.searchParams.set('status', 'publish')
  endpoint.searchParams.set('_fields', 'id,slug,link,title,excerpt,content.protected,date_gmt,modified_gmt,status')
  const limit = Number.isFinite(options.limit) ? Math.max(1, Math.min(100, Math.trunc(options.limit!))) : 20
  endpoint.searchParams.set('per_page', String(options.all ? 100 : limit))
  const search = options.search?.trim().slice(0, 150)
  if (search) endpoint.searchParams.set('search', search)
  const output: BlogPost[] = []
  const ids = new Set<number>()
  let pages = 1
  for (let page = 1; page <= pages; page++) {
    endpoint.searchParams.set('page', String(page))
    const response = await fetch(endpoint, {
      redirect: 'error',
      signal: AbortSignal.timeout(10_000),
      ...(search ? { cache: 'no-store' as const } : { next: { revalidate: 300 } }),
    })
    if (!response.ok) throw new Error(`WordPress posts API returned ${response.status}`)
    if (page === 1 && options.all) {
      const total = Number(response.headers.get('x-wp-totalpages') ?? 1)
      pages = Number.isSafeInteger(total) ? Math.max(1, total) : 1
    }
    const data = await response.json() as WordPressPost[]
    if (!Array.isArray(data)) throw new Error('Unexpected WordPress posts result')
    for (const post of data) {
      if (post.status !== 'publish' || !post.slug || ids.has(post.id) ||
          post.excerpt?.protected || post.content?.protected) continue
      const url = pathForPost(post)
      if (!url) continue
      ids.add(post.id)
      output.push({
        id: post.id, slug: post.slug, url,
        titleHtml: post.title?.rendered || '',
        excerptHtml: post.excerpt?.rendered || '',
        publishedAt: gmt(post.date_gmt),
        lastModified: gmt(post.modified_gmt),
      })
    }
  }
  return output
}
