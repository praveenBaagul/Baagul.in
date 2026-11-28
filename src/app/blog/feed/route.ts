import { proxyBlog } from "@/lib/wordpress-blog-proxy";

// Keeps the RSS feed at /blog/feed, which the earlier blog proxy exposed. The
// feed's links are rewritten to baagul.in/blog/... by the proxy helper.
export const GET = proxyBlog;
export const HEAD = proxyBlog;
