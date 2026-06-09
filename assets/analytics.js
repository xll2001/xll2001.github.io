(function () {
  // Paste the Cloudflare Web Analytics site token here after creating a site in Cloudflare.
  var cloudflareWebAnalyticsToken = "cfde4f24e4a8440bb40c8abb894acc81";

  if (!cloudflareWebAnalyticsToken) {
    return;
  }

  if (document.querySelector('script[src="https://static.cloudflareinsights.com/beacon.min.js"]')) {
    return;
  }

  var beacon = document.createElement("script");
  beacon.defer = true;
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.setAttribute(
    "data-cf-beacon",
    JSON.stringify({ token: cloudflareWebAnalyticsToken })
  );

  document.body.appendChild(beacon);
})();
