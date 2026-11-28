import { proxyBlog } from "@/lib/wordpress-blog-proxy";

// Serves WordPress media library files (images, PDFs, video) at the same
// /blog/wp-content/uploads/... URLs the earlier blog proxy used, so article
// images load from baagul.in. Only upload files are reachable here: theme and
// plugin assets, wp-admin, wp-login and the REST API have no route.
export const GET = proxyBlog;
export const HEAD = proxyBlog;
