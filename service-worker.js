// service-worker.js

const CACHE_NAME = 'keyboard-shortcuts-cache-v1';

const urlsToCache = [
  '/',                 // root
  '/index.html',
  '/start.html',
  '/hero.html',

  '/start.css',
  '/hero.css',

  '/hero.js',

  // Fonts
  '/assets/fonts/Gendy.otf',

  // Icons
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',

  // Screenshots / images
  '/assets/screenshots/banner.png',
  '/assets/screenshots/screenshot1.png',
  '/assets/screenshots/screenshot2.png',
  '/assets/screenshots/screenshot3.png'
];

// Install service worker and cache all files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate service worker and remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Intercept fetch requests and serve cached files first
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
