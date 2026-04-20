self.addEventListener('fetch', (event) => {
  // Ce script minimal permet de passer les critères d'installation PWA
  event.respondWith(fetch(event.request));
});
