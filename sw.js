const CACHE_NAME = 'qs-pruefung-v11';
const BASE_PATH = '/tablet-sim/'; // Passe das an deinen Repo-Namen an!
const urlsToCache = [
  `${BASE_PATH}index.html`,
  `${BASE_PATH}test.html`,
  `${BASE_PATH}manifest.json`,
  `${BASE_PATH}assets/`, // Optional: alle Assets, ggf. spezifische Dateien listen
  'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'
];

// Install event - cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});