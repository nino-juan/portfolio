'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cfa430dee1b93a1badf42c812a970e3e",
"assets/assets/babel-library-n.png": "327d0f1a6b98cd456f6f75cbf2a54f12",
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
"assets/assets/github-jn.svg": "b3708e187e4c8f20a6c0ab65de4a247b",
"assets/assets/hex-b.png": "22c8f1332052cc73fd2bcc7117b4bc0a",
"assets/assets/hex-bl.png": "1fb6cd36e8e6dc4b88373ca74e6d011e",
"assets/assets/hex-gl.png": "0b2dcb4dc47cdaf00dd37d0f9f2d8fc6",
"assets/assets/JN-logo.png": "5468531d8fce060b65efdc2a1e8c7f9e",
"assets/assets/JN-logo.svg": "800cf4015fae1fe9c1feb5fa799a2ce8",
"assets/assets/Juan-Nino-CV.pdf": "80851309d91bd516406485f918879fad",
"assets/assets/lab-vivant-n.png": "f37649185a0ca2cea23c1171e5693eae",
"assets/assets/lab-vivant.png": "7690a96d64310c530b5bef221f6823c8",
"assets/assets/linkedin-jn.svg": "3449a0cfff4f4e3efffdb28f71a25dec",
"assets/assets/magna-quest-n.png": "8b1444e6608663231888accddca60b09",
"assets/assets/magna-quest.png": "7ace15f3ca76a6a80206ec7f02682c75",
"assets/assets/participatory-opera-n.png": "f5112617d8d4316cbc83e90e7fc3b0a2",
"assets/assets/participatory-opera.png": "98f4de6344bac5c4a4140db1b9c7dac6",
"assets/assets/profile-sm.png": "aa396da0037c4d38b51fc1ac02733533",
"assets/assets/tactile-navigator-n.png": "9e4a6d0425e29adf39b85afd10ba4927",
"assets/assets/tactile-navigator.png": "3a2d902510bc0efa9efd36c2227dec89",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "102aed9e7b90aae7c75a5516f4d8208a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "736a342b25a0348d93c0df57a8a80bc5",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Hex-192.png": "9dda096ccdf1462cf05bf7eeab4f685c",
"icons/Icon-16.png": "8f2ac24d3c8945c1a66b6e0810c5bb27",
"icons/Icon-192.png": "c57206b80f1e195f77b9e1abeed24c89",
"icons/Icon-32.png": "3b5edb9c81e6425cc3bbe870bc062d43",
"icons/Icon-512.png": "d5267b18fcf96dd6161687d03d3b8a7c",
"icons/Icon-maskable-192.png": "9cf44074ded9fb508f8bc5db02d79a9b",
"icons/Icon-maskable-512.png": "db60d70cd331a9d5cd411f134014e7d8",
"icons/JN-192.png": "02f0a9bff8f467ffd780d057ba5b613f",
"index.html": "9eacf7c2cdc24c3262648213b5ba94fb",
"/": "9eacf7c2cdc24c3262648213b5ba94fb",
"main.dart.js": "8b21bb964ec73560e651bd93a7eeb342",
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
