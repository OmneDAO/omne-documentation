/**
 * Cloudflare Workers entry point — pure asset passthrough for docs.omne.foundation.
 *
 * The docs site is a static Next.js export (output: 'export', emits to ./out).
 * No dynamic origin logic, no cross-host redirects needed (docs.omne.foundation
 * has no www variant; the Foundation site's www→apex pattern doesn't apply here).
 *
 * Every request is forwarded to env.ASSETS (the Workers Static Assets binding
 * configured in wrangler.jsonc), which serves files from ./out and respects
 * ./out/_redirects (trailing-slash → bare-path 301 per impl plan §6.1).
 *
 * If a request matches no asset, Cloudflare's static-assets handler falls
 * back to ./out/404.html per assets.not_found_handling: "404-page".
 *
 * Kept deliberately empty so the deploy stays close to Cloudflare Pages
 * static-hosting semantics. Future routing logic (e.g., language redirects)
 * lands here; run_worker_first: true in wrangler.jsonc ensures it actually
 * runs.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
