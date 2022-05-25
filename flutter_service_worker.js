'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c20a33a1d0e86d4a34876a68a30ed7a9",
"assets/assets/babel-library.png": "d032fcd5961b6cf348e03b26b8ab4b6a",
"assets/assets/Bees.svg": "ac70d4753cf3ed909867851e277213b2",
"assets/assets/github-jn.svg": "5b8d2a98a88c95fdcdb96ad308a92876",
"assets/assets/hex-b.png": "37b3473ac47964a8c482a34970ad0637",
"assets/assets/hex-bl.png": "67289ce3d634072ed9dcf17649e27b1d",
"assets/assets/hex-g.png": "0b2dcb4dc47cdaf00dd37d0f9f2d8fc6",
"assets/assets/hex-gl.png": "fffe86df93978fe52958718966ad7141",
"assets/assets/JN-logo.png": "ab1d74f9bca15ff01f5f9dba2f5e15cd",
"assets/assets/JN-logo.svg": "ad24604a4aa1782125cafa23a1b30185",
"assets/assets/Juan-Nino-CV.pdf": "c453f1425dc17bb60fb7c89061ef06f2",
"assets/assets/lab-vivant.png": "486c8844d2d08525787ab63fe51f49d5",
"assets/assets/linkedin-jn.svg": "cb7a3b93078dac88e808d1c004bd3e8a",
"assets/assets/magna-quest.png": "140d7cad4cd87bfdde752c4538eb65be",
"assets/assets/participatory-opera.png": "a59f75977080506e8eb6f1a5d43d3f7e",
"assets/assets/profile-sm.png": "3e8922cbe3b6bb877ddb3ae3a64020bd",
"assets/assets/profile.png": "22fd0d4c436ddf150ffeadc679d340ca",
"assets/assets/tactile-navigator.png": "17d2b9e00ae7ce64b9d1a3f78b65c2bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "71819b5ad28b6cb19f64454390dc22e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "736a342b25a0348d93c0df57a8a80bc5",
"icons/Hex-192.png": "9dda096ccdf1462cf05bf7eeab4f685c",
"icons/Icon-16.png": "736a342b25a0348d93c0df57a8a80bc5",
"icons/Icon-192.png": "11dbc60cb2eff3cb4546def1ce5b56df",
"icons/Icon-32.png": "3e864c09a87f91e04c013c9fe85f0898",
"icons/Icon-512.png": "ce9e57548b1626cad2223c134fe0ad00",
"icons/Icon-maskable-192.png": "80b0b96d845a5be7a88a73a1a79aa607",
"icons/Icon-maskable-512.png": "caadeea964b30fe42d90a80a07d528cc",
"icons/JN-192.png": "c9360ac08b6c33105d1ed38535badfca",
"index.html": "7a5b3be9eba2d021c1ca64f76526911e",
"/": "7a5b3be9eba2d021c1ca64f76526911e",
"main.dart.js": "680c8103d7db572b2acfe57ae0a3373e",
"manifest.json": "e1ff7e6b504497f45fe647c617b6db61",
"version.json": "15592eee1dda78eca7eefd70ac0135a8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
