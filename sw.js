const CACHE_NAME = 'jizhang-v3';
const ASSETS = ['./', './index.html', './icon.svg'];

// Install: cache assets for offline use
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  // Take over immediately, don't wait for old tabs to close
  self.skipWaiting();
});

// Activate: clean old caches, claim all clients
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  // Control all pages immediately
  self.clients.claim();
});

// Network-first: always try network first, fall back to cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Cache the fresh response for offline use
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
