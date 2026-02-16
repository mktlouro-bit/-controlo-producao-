const CACHE_NAME = 'controlo-producao-v1';
const urlsToCache = [
  './controlo_producao_queijo.html',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Instalação - cache dos recursos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação - limpar caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Cache antigo removido:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch - servir do cache quando offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retorna do cache se encontrar, senão busca da rede
        return response || fetch(event.request);
      })
      .catch(() => {
        // Se estiver offline e não tiver no cache
        console.log('Offline e recurso não encontrado no cache');
      })
  );
});
