self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('emp-dir').then(function(cache) {
      return cache.addAll([
          "/progress-web-app",
          "index.html",
          "unknown.svg",
          "directory.html",
          "detail-overlay.html",
          "employee.html",
          "android-chrome-36x36.png",
          "android-chrome-48x48.png",
          "android-chrome-72x72.png",
          "android-chrome-96x96.png",
          "android-chrome-144x144.png",
          "android-chrome-192x192.png",
          "android-chrome-256x256.png",
          "android-chrome-384x384.png",
          "android-chrome-512x512.png",
        ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});
