"use strict";var precacheConfig=[["/ommish.github.io/index.html","af8bb2bf5461f56329faa63dcf43a951"],["/ommish.github.io/static/css/main.bce98dc3.css","cac1db2fb83d89dc82105f27a0179112"],["/ommish.github.io/static/js/main.ebebe475.js","05c4aadae2b0c9f1781a53fe8f97c9bc"],["/ommish.github.io/static/media/atventure.c60dfc48.png","c60dfc485504053b498aea350dc803e8"],["/ommish.github.io/static/media/characters.8638c181.png","8638c181297b02de21d199a438e515ef"],["/ommish.github.io/static/media/dungeonhop.b44ef8a0.png","b44ef8a0bd0cddbed06f2ff23fd15bc6"],["/ommish.github.io/static/media/lichen.c91ad02d.jpg","c91ad02dffd07dbe69f776543def2eef"],["/ommish.github.io/static/media/ommi.440ea489.jpg","440ea4898ee0049c299567957f1b69e8"],["/ommish.github.io/static/media/omninote.ca2f5d1a.png","ca2f5d1a36964b953e00b3ed679107a8"],["/ommish.github.io/static/media/redux.3aae461e.png","3aae461ed8df5036e87be923b62f8665"],["/ommish.github.io/static/media/trie.6f0db6dd.gif","6f0db6dd509d7b6f605989b2c29cfc75"],["/ommish.github.io/static/media/twomedicine.71317b8b.jpg","71317b8be04655cecc444bb417634b4d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/ommish.github.io/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});