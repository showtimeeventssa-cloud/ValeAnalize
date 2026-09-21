const CACHE = "valeanalize-v26-logo-safe-20260921";
const ASSETS=["./index.html","./manifest.webmanifest","./icons/icon-48-v26.png","./icons/icon-96-v26.png","./icons/icon-120-v26.png","./icons/icon-152-v26.png","./icons/icon-180-v26.png","./icons/icon-192-v26.png","./icons/icon-256-v26.png","./icons/icon-384-v26.png","./icons/icon-512-v26.png","./icons/icon-1024-v26.png","./icons/apple-touch-icon-v26.png","./icons/favicon-v26.png","./data/gp50-database.json","./templates/COUNTRY26.prst"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch", event => {
  if(event.request.method!=="GET") return;
  if(event.request.mode==="navigate" || new URL(event.request.url).pathname.endsWith("/index.html")) {
    event.respondWith(fetch(event.request).then(r=>{ const copy=r.clone(); caches.open(CACHE).then(c=>c.put("./index.html",copy)); return r; }).catch(()=>caches.match("./index.html")));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
