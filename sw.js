const CACHE_NAME = "reroll-cache-v4";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES))
      .catch((error) => {
        console.error("ReRoll cache setup failed:", error);
      })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only handle normal page/resource requests.
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Leave requests to other websites alone.
  if (url.origin !== self.location.origin) return;

  // For page navigation, try the live site first, then use the cached page offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => cache.put("./index.html", copy))
              .catch((error) => {
                console.error("ReRoll page cache update failed:", error);
              });
          }

          return response;
        })
        .catch(async () => {
          return (
            (await caches.match(request)) ||
            (await caches.match("./index.html")) ||
            Response.error()
          );
        })
    );

    return;
  }

  // For other same-origin resources, use the live response and cache successful GETs.
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => cache.put(request, copy))
            .catch((error) => {
              console.error("ReRoll resource cache update failed:", error);
            });
        }

        return response;
      })
      .catch(async () => {
        return (await caches.match(request)) || Response.error();
      })
  );
});
