'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4f803859ba1e0065f488e32575e358c8",
"assets/AssetManifest.bin.json": "4febfed5c1f5548112784ab429401995",
"assets/AssetManifest.json": "741a487045d8fbf1b0e9bb4d4eeea146",
"assets/assets/avatar/a_fernandez.png": "cf5203ac3076458060c6c724ae0f372a",
"assets/assets/avatar/c_gomez.png": "68574e8dca45679893e7d398799f1b28",
"assets/assets/avatar/e_vilchez.png": "6f185f42b1e57019241eb6aa2e9877ee",
"assets/assets/avatar/j_quispe.png": "0d28468a6748f018d52855560b5e19da",
"assets/assets/avatar/l_torres.png": "13ac0e672de0db51f12c6c5bb4be5cb2",
"assets/assets/avatar/m_chavez.png": "f0cc180a5996fe050d02ec4a61aae411",
"assets/assets/avatar/m_flores.png": "3a3bb5edd544613d2a2663c966ea0d40",
"assets/assets/avatar/p_castillo.png": "3dc19234959d1c39e1371c5244baf0ed",
"assets/assets/avatar/s_rodriguez.png": "58a6df8e79edd910d71d7ec5fd8beff6",
"assets/assets/avatar/v_mendoza.png": "0bec287a52e7d072f0e9b1d2b6aadd9e",
"assets/assets/icons/facebookw.png": "34d412950a791b8647ae681aa54e1614",
"assets/assets/icons/instagramw.png": "411925922efa5b896c7da86db734e037",
"assets/assets/icons/tiktokw.png": "d016753630ffb3011041abbfb3a8416a",
"assets/assets/icons/whatsapp.png": "ad76d495c77d3c702cb7cd398a1c18e0",
"assets/assets/mudanza2.png": "8cfd72492d40a82e009ab8186d37fde6",
"assets/assets/mudanza3.png": "e3263f2f5e4176476327a9bf19c7c2db",
"assets/assets/mudanza4.png": "136d6636fce58b4e7fc6d9660f24627d",
"assets/assets/services/carga_congelada.png": "46503e7050e0663eff0358aadf7b78a0",
"assets/assets/services/carga_contenedor.png": "00ff320d962d9aa2a071fec754122c40",
"assets/assets/services/carga_granel.png": "05895e7380de80c525ea9b1c18eb86f2",
"assets/assets/services/carga_liviana.png": "8d66976979f5026600686afe4ad0bafc",
"assets/assets/services/carga_mudanza_comercial.png": "d19a6c2a33d95f313d131e2cc2faf351",
"assets/assets/services/carga_peligrosa.png": "ff9a13935f5df553302b62de510c70b6",
"assets/assets/services/carga_pesada.png": "600570cf618c0a3f3187533868093110",
"assets/assets/services/carga_urgente.png": "42e693535d7ac825b630f763e72e32d5",
"assets/assets/services/mudanza_express.png": "7593de6185b168873d7aa76c14e2e4fc",
"assets/assets/services/mudanza_fragil.png": "30efe7d683715dc0e36f018015d9c8c1",
"assets/assets/services/mudanza_hogar.png": "af4577471af5c6b14f4457f27c2ff514",
"assets/assets/services/mudanza_oficina.png": "295bea9c0dac2119d164a5c5adc2b071",
"assets/assets/services/mudanza_pesada.png": "a339c150a7f613beacb401529b109141",
"assets/assets/services/mudanza_vehiculos.png": "f857659ef97ce7369d3f7b55fddc7a18",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "82a5cbeff423650cadba79560e2eab1e",
"assets/NOTICES": "4f5de7f84fddd0965bb835847e4c9e69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "0afeab2b7aa9407b296606d1b84e80bf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "381b86b8891d193d0ad6f364d581b766",
"/": "381b86b8891d193d0ad6f364d581b766",
"main.dart.js": "8c2eaa468e9af3dd5d6e5f385ed2be90",
"manifest.json": "af8d0fdb730c0a580e0689e22fb06ab3",
"version.json": "7cbc9326a9ea68c5cf64b33fe6189437"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
