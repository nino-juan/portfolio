'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "54a9aec6724851abcfd27b8cc169820c",
"assets/assets/babel-library.png": "1a10303811f429bd4fde88905316099f",
"assets/assets/Bees.svg": "ac70d4753cf3ed909867851e277213b2",
"assets/assets/content/1-hands.jpg": "496c8acc9614db8650ad23820e20280b",
"assets/assets/content/1-legohand.jpg": "4961a7b7b93de3dcd053d7caf802cb09",
"assets/assets/content/1-pinc.webp": "855a9684f10c7967864ca81431f02c92",
"assets/assets/content/1-pinf.webp": "9a1788b2ac6871aceafec5a74b078588",
"assets/assets/content/1-system.png": "fbb498707f7e9e512c0cc7401ada1e9e",
"assets/assets/content/1-vi.png": "b5fbf6d5b94379cd7accf554fc25ad67",
"assets/assets/content/2-flower.png": "d66c707819ec2f9a0d336575eb8f987b",
"assets/assets/content/2-holoflower.jpg": "cf401440ba5f30a480ae2abef95937b4",
"assets/assets/content/2-nlp_doodle.gif": "fcfa04fb2fc83e06c4083df4e2d18e26",
"assets/assets/content/2-pepper.png": "595cb5ad813b609d3b5b184893685b39",
"assets/assets/content/2-proto.jpg": "6a21b75ef4de2df8a2729a41559a6152",
"assets/assets/content/2-semantic.jpg": "0e9b38e78e01fab1f065df8704415850",
"assets/assets/content/3-360vr.png": "35690a1ca33c41c7637605673733604e",
"assets/assets/content/3-ar1.png": "f5aa1ffa9f91af5a8b5e2f90e9ac95e3",
"assets/assets/content/3-AR2.png": "aa382d663f02e2a51324178634921779",
"assets/assets/content/3-breath.png": "e8e4cb981c1c7b3fd781ebaaf685876a",
"assets/assets/content/3-dance.png": "2592762de10946e0379832b17bcaba3c",
"assets/assets/content/3-env.png": "49c117eafc93cf4562eb3d93c34c32b6",
"assets/assets/content/3-finalle.png": "ead1dae356d517135926e5ac0461b58c",
"assets/assets/content/3-nemosstage.png": "580a9fc760e8a936ae0a0fe7f80de5f0",
"assets/assets/content/3-online.png": "e3f29f79313a750f58ff452de5bdadaa",
"assets/assets/content/3-portal.png": "c19c6355c89cb1408f4c7fd7953c8ed2",
"assets/assets/content/3-server.jpg": "11b1eaf5d1e837542c8e0d397cce8be2",
"assets/assets/content/3-sound.png": "4c96c6c7375225a8725edb5873b4c6f5",
"assets/assets/content/3-stage.png": "5f64e916b1dc0287911b96f6dfd6062a",
"assets/assets/content/3-vr1.png": "8f25a5a4e3a0072b89cd06fe309165e5",
"assets/assets/content/3-vr2.png": "666d2e57499f32067c194cb18ce6f641",
"assets/assets/content/4-a.png": "f9188d84c1d691687820a0eead3a5c08",
"assets/assets/content/4-datac.jpg": "09fab9edb0c81f75ed65da769a4c2f41",
"assets/assets/content/4-e.png": "684da282d023d74b61c1d98e9688b682",
"assets/assets/content/4-gesturedata.png": "67d1df786c3ed08cc9849c563edcbc3f",
"assets/assets/content/4-i.png": "6bc800582a8d1b09c4d8359cef5702f8",
"assets/assets/content/4-mocap.png": "0af9ef85541e3be629836aa93c8a803a",
"assets/assets/content/4-mocapdata.png": "32e1cdf2e684f52d89ad4616b28b3d2e",
"assets/assets/content/4-o.png": "ded998cbe6d1cc660ca3ced3aa6f56ee",
"assets/assets/content/4-wearable.jpg": "2b1eb48c6111edc33a5e7d05ff78cc98",
"assets/assets/content/5-cb.jpg": "9e1983492d787ad4be8d17f13c41b44e",
"assets/assets/content/5-collective.jpg": "6206f3478677707a6e3228a8b078c0a2",
"assets/assets/content/5-f5.jpg": "ba922b36705cd324c9b8e238739e7d5a",
"assets/assets/content/5-game.jpg": "9bdeb8d7daf5332d7a905854a2dbd577",
"assets/assets/content/5-nyu.jpg": "05ec6e048b4e1026fd13787a33b91542",
"assets/assets/content/5-platforms.jpg": "4914d86a22972e8a21c52df5d4c8e095",
"assets/assets/github-jn.svg": "5b8d2a98a88c95fdcdb96ad308a92876",
"assets/assets/hex-b.png": "37b3473ac47964a8c482a34970ad0637",
"assets/assets/hex-bl.png": "67289ce3d634072ed9dcf17649e27b1d",
"assets/assets/hex-g.png": "0b2dcb4dc47cdaf00dd37d0f9f2d8fc6",
"assets/assets/hex-gl.png": "fffe86df93978fe52958718966ad7141",
"assets/assets/JN-logo.png": "ab1d74f9bca15ff01f5f9dba2f5e15cd",
"assets/assets/JN-logo.svg": "ad24604a4aa1782125cafa23a1b30185",
"assets/assets/Juan-Nino-CV.pdf": "c453f1425dc17bb60fb7c89061ef06f2",
"assets/assets/lab-vivant.png": "7690a96d64310c530b5bef221f6823c8",
"assets/assets/linkedin-jn.svg": "cb7a3b93078dac88e808d1c004bd3e8a",
"assets/assets/magna-quest.png": "7ace15f3ca76a6a80206ec7f02682c75",
"assets/assets/participatory-opera.png": "98f4de6344bac5c4a4140db1b9c7dac6",
"assets/assets/profile-sm.png": "f5279369e8426d6bf3afc1e4daa8809e",
"assets/assets/profile.png": "22fd0d4c436ddf150ffeadc679d340ca",
"assets/assets/tactile-navigator.png": "3a2d902510bc0efa9efd36c2227dec89",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1f4b590d0b4af816a95b3f3a74e03e6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "736a342b25a0348d93c0df57a8a80bc5",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Hex-192.png": "9dda096ccdf1462cf05bf7eeab4f685c",
"icons/Icon-16.png": "736a342b25a0348d93c0df57a8a80bc5",
"icons/Icon-192.png": "11dbc60cb2eff3cb4546def1ce5b56df",
"icons/Icon-32.png": "3e864c09a87f91e04c013c9fe85f0898",
"icons/Icon-512.png": "ce9e57548b1626cad2223c134fe0ad00",
"icons/Icon-maskable-192.png": "80b0b96d845a5be7a88a73a1a79aa607",
"icons/Icon-maskable-512.png": "caadeea964b30fe42d90a80a07d528cc",
"icons/JN-192.png": "c9360ac08b6c33105d1ed38535badfca",
"index.html": "97e99117bddf8feb573474b391754fb1",
"/": "97e99117bddf8feb573474b391754fb1",
"main.dart.js": "848500a2de25f18ad7c4736bb6369940",
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
