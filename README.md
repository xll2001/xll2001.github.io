# Longlong Xu Personal Homepage

Static academic homepage for Longlong Xu.

## Files

- `index.html`: homepage content
- `styles.css`: responsive page styling
- `assets/research-map.svg`: local visual asset for the hero section
- `assets/analytics.js`: optional Cloudflare Web Analytics loader

Open `index.html` directly in a browser, or serve this directory with any static file server.

## Analytics

This site includes a Cloudflare Web Analytics loader. It is disabled until a site token is added.

1. In Cloudflare, go to **Analytics & Logs -> Web Analytics**.
2. Add the published hostname only, without `https://` or a path, for example `yourname.github.io` or your custom domain.
3. Copy the site token from Cloudflare's JavaScript snippet.
4. Paste the token into `cloudflareWebAnalyticsToken` in `assets/analytics.js`.
