self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("connectar-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./logo.png",
        "./connectar.vcf"
      ]);
    })
  );
});
