const CACHE = "valeanalize-v20-20260920";
const ASSETS = [
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192-v19.png",
  "./icons/icon-512-v19.png",
  "./icons/icon-1024-v19.png",
  "./icons/apple-touch-icon-v19.png",
  "./icons/favicon-v19.png",
  "./data/gp50-database.json",
  "./templates/COUNTRY26.prst"
];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  if(e.request.mode === "navigate" || new URL(e.request.url).pathname.endsWith("/index.html")){
    e.respondWith(fetch(e.request).then(r => { const copy=r.clone(); caches.open(CACHE).then(c => c.put("./index.html",copy)); return r; }).catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
