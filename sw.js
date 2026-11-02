const APP_FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
const SCOPE_URL = new URL(self.registration.scope);
const CACHE_PREFIX = 'reroll:' + SCOPE_URL.pathname + ':';
const CACHE_NAME = CACHE_PREFIX + 'v3';
const APP_PATHS = new Set(APP_FILES.map(path => new URL(path, SCOPE_URL).pathname));

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !APP_PATHS.has(url.pathname)) return;

  const cacheKey = new Request(url.origin + url.pathname, { method: 'GET' });
  event.respondWith(
    fetch(request).then(response => {
      if (response.ok && response.type === 'basic') {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(cacheKey, copy));
      }
      return response;
    }).catch(async () => {
      const cached = await caches.match(cacheKey);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        return caches.match(new URL('index.html', SCOPE_URL).href);
      }
      return Response.error();
    })
  );
});
