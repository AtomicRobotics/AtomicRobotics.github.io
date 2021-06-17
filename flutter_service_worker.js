'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2f77314df6f55423acfbda7a533537b3",
".git/config": "ec7b67f30c408733281537e3e3ca26e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "31eb356eefe6a1ff817f40c91ac18fb1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "25715231464534b4858bb4125d8fb985",
".git/logs/refs/heads/main": "5c2c29dba7350d1c039fbe59265370f5",
".git/logs/refs/remotes/origin/main": "408bb8e85ebbedbf845081e086627dff",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/2005763ebed9af883efd40cd0073a3e40d3460": "69fec2d8bdda75751e8e1e479ff7219c",
".git/objects/08/16c6749d1977652c769b31b5243546918ea86b": "f6d208a37c5ebdf7d388388b01bd22c2",
".git/objects/0a/49e290c09dee5824403234825cf29f871f1934": "ab5a5257210437377336650a5757c4d6",
".git/objects/13/9670fe22": "bc0acde95b436a611b03582058f4cd1b",
".git/objects/13/a236907762c416f8d791f9fc65504968daabcb": "bc0acde95b436a611b03582058f4cd1b",
".git/objects/13/c872911a": "bc0acde95b436a611b03582058f4cd1b",
".git/objects/14/1690a95a": "dadb95777d702b7419ffbf71d521c91d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/b163cfe4": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2f/25c3c5d38f2d98945be54fec688b1c96c1c079": "8b85a60258604e2cde97fdb7d53d6ba4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/099f4ec8c1dc98d6e26b874c643e1ea7dbb74f": "442d7d964c1d83bcf0e0ad8e8facdaa0",
".git/objects/3e/4bc1ba3b02ad13c25ddc8c54755952c80c5a4f": "ded3f8f8b35144e1bf12be94cc1de4ad",
".git/objects/43/0269bcb659ee097cf21efbeebdbd024165b179": "3fefbf89af8b74d2c99407af2be96c27",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/2739c2df44a0ac5bd00db42ba90bcee7e006ec": "a885b4345681b53d084d5386bd95ef86",
".git/objects/58/2e0b18c0d75ffcf4ed1ba0a237382c777cdcfe": "e3250ab8e398d7d927b8be87f0c6aa6d",
".git/objects/65/208d78a64f3fbf1b6442efa79777274af966ae": "35e85ff9837310e89b2ce840db2d7ed2",
".git/objects/66/972facb57a070742435ed62f39112575e1419a": "89bc2b2d092f82521f611750b8261014",
".git/objects/76/9a7fa1aeadc7f67d11e2f6f2ce6bfbb79014f6": "05d836d71f48fae04d4c7cde11618ec6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/2a71b4fa12c0fb7f081a59396f3369d3814840": "d148c2d95ace0ee6e5a3e5850255d107",
".git/objects/98/f0af9f5be1e17da3c8426d8b0c689fb2480ec7": "c438fe3023edddfd2426670306e8cc04",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/8caa89b0a29bdeed40c65efbeb3c2c68edcd86": "86407b1b6874a195ce414ba7c9e7a9c0",
".git/objects/a5/d30991a5c9aef3201033149c3f135d7f46dce6": "f69d5f3714c3577913a248525d2c89fb",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/7fa88020090763bd35bfdf9069532741a72ec0": "5b63c1c605b08ce68793ba59b79ba163",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/091755c5311387f2540c1a9f98a71bcb93c570": "2ce877a08046234f18631f6cb29ef90a",
".git/objects/bc/64cc96571b249eac06774025b4a1ef6b105c84": "14b537472d157e1fdbfd0800690840d2",
".git/objects/dc/c628e390a189f39b0fd66b36061991a7f97fa8": "0d7f8e69b88aaa5fd04ca5a57432d611",
".git/objects/df/15b80a491fe67b110fb22f1f7bca89560e5d24": "fa2ace03fa6e077aea4778decc960ddc",
".git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9f53d4e10b114b288813337c6f6fe5c4e01839": "f51f31635fc1679b33914861d27ad926",
".git/objects/f1/d064291b3195b6ee81f1b029a2f5de7f0dd6ce": "11e52f2f2beb4f9d95a073757ce939db",
".git/objects/f9/c64c48ae80a4ee1b9230c8f936d8afb3c20d06": "a6a4e8fb32eabdc011082b782f05fa4a",
".git/refs/heads/main": "73fd3bd658bdb628fc075efc44546790",
".git/refs/remotes/origin/main": "73fd3bd658bdb628fc075efc44546790",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6272e37620b7c875f34ec56867073d63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ea8f75c1092c735b49f2e6987e272bff",
"/": "ea8f75c1092c735b49f2e6987e272bff",
"main.dart.js": "e70e5c5c3996df2f65b976397c85c10f",
"manifest.json": "fd6b2aac771a1c87852075c1b899702b",
"README.md": "ccfa0445ff40b099f19c1824d92ac459",
"version.json": "4ffaee577a42fc0e6afb382be53d012a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
