// Academy Manager — Service Worker v6 — Network First
const CACHE_NAME = 'academy-manager-v6';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Skip non-GET, Firebase, and API requests
  if (
    event.request.method !== 'GET' ||
    event.request.url.includes('firestore') ||
    event.request.url.includes('firebase') ||
    event.request.url.includes('googleapis.com')
  ) {
    return;
  }

  // Network first — always get fresh content
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache a copy for offline use
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Only use cache if network fails (offline)
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          if (event.request.destination === 'document') {
            return caches.match('/rsbacademy-app/index.html');
          }
        });
      })
  );
});
