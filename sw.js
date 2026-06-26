const CACHE_NAME = 'checkin-app-v4';
const ASSETS = [
  '/Wellness-Hub/',
  '/Wellness-Hub/index.html',
  '/Wellness-Hub/manifest.json',
  '/Wellness-Hub/icon.png'
];

// Install: cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network only (no cache)
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
