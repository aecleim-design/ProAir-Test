const CACHE_NAME = 'proair-cert-v1';
const ASSETS = [
  './BG2.html',
  './manifest.json',
  './icon.png'
];

// Install and Cache Assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve from Cache when Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

