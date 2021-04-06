// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\mobile\\hero-header\\m-hero@2x.png":[["m-hero@2x.61121144.png","images/mobile/hero-header/m-hero@2x.png"],"images/mobile/hero-header/m-hero@2x.png"],"./..\\images\\mobile\\hero-header\\m-hero.png":[["m-hero.e321a7c4.png","images/mobile/hero-header/m-hero.png"],"images/mobile/hero-header/m-hero.png"],"./..\\images\\tablet\\hero-header\\tablet-hero@2x.png":[["tablet-hero@2x.bf13cb28.png","images/tablet/hero-header/tablet-hero@2x.png"],"images/tablet/hero-header/tablet-hero@2x.png"],"./..\\images\\tablet\\hero-header\\tablet-hero-milk@2x.png":[["tablet-hero-milk@2x.b5e8c64a.png","images/tablet/hero-header/tablet-hero-milk@2x.png"],"images/tablet/hero-header/tablet-hero-milk@2x.png"],"./..\\images\\tablet\\hero-header\\tablet-hero-girl@2x.png":[["tablet-hero-girl@2x.6d0d3bd8.png","images/tablet/hero-header/tablet-hero-girl@2x.png"],"images/tablet/hero-header/tablet-hero-girl@2x.png"],"./..\\images\\tablet\\hero-header\\tablet-hero.png":[["tablet-hero.339b0233.png","images/tablet/hero-header/tablet-hero.png"],"images/tablet/hero-header/tablet-hero.png"],"./..\\images\\desktop\\hero-header\\desk-hero@2x.png":[["desk-hero@2x.511c7268.png","images/desktop/hero-header/desk-hero@2x.png"],"images/desktop/hero-header/desk-hero@2x.png"],"./..\\images\\desktop\\hero-header\\desk-hero.png":[["desk-hero.714edf19.png","images/desktop/hero-header/desk-hero.png"],"images/desktop/hero-header/desk-hero.png"],"./..\\images\\desktop\\hero-header\\desk-hero-milk.png":[["desk-hero-milk.8b0eef6b.png","images/desktop/hero-header/desk-hero-milk.png"],"images/desktop/hero-header/desk-hero-milk.png"],"./..\\images\\desktop\\hero-header\\desk-hero-girl.png":[["desk-hero-girl.4b541077.png","images/desktop/hero-header/desk-hero-girl.png"],"images/desktop/hero-header/desk-hero-girl.png"],"./..\\images\\mobile\\advantages\\m-prod-icecream.png":[["m-prod-icecream.6350a340.png","images/mobile/advantages/m-prod-icecream.png"],"images/mobile/advantages/m-prod-icecream.png"],"./..\\images\\group.svg":[["group.10088665.svg","images/group.svg"],"images/group.svg"],"./..\\images\\mobile\\advantages\\m-prod-coffee.png":[["m-prod-coffee.f5de57fb.png","images/mobile/advantages/m-prod-coffee.png"],"images/mobile/advantages/m-prod-coffee.png"],"./..\\images\\mobile\\advantages\\m-prod-shake.png":[["m-prod-shake.9e6d3877.png","images/mobile/advantages/m-prod-shake.png"],"images/mobile/advantages/m-prod-shake.png"],"./..\\images\\tablet\\advantages\\tablet-prod-icecream.png":[["tablet-prod-icecream.1f42c9bd.png","images/tablet/advantages/tablet-prod-icecream.png"],"images/tablet/advantages/tablet-prod-icecream.png"],"./..\\images\\tablet\\advantages\\tablet-prod-coffee.png":[["tablet-prod-coffee.299cbd10.png","images/tablet/advantages/tablet-prod-coffee.png"],"images/tablet/advantages/tablet-prod-coffee.png"],"./..\\images\\tablet\\advantages\\tablet-prod-shake.png":[["tablet-prod-shake.13ef5f11.png","images/tablet/advantages/tablet-prod-shake.png"],"images/tablet/advantages/tablet-prod-shake.png"],"./..\\images\\desktop\\advantages\\desk-prod-icecream.png":[["desk-prod-icecream.6c556acf.png","images/desktop/advantages/desk-prod-icecream.png"],"images/desktop/advantages/desk-prod-icecream.png"],"./..\\images\\desktop\\advantages\\desk-prod-coffee.png":[["desk-prod-coffee.62fa840f.png","images/desktop/advantages/desk-prod-coffee.png"],"images/desktop/advantages/desk-prod-coffee.png"],"./..\\images\\desktop\\advantages\\desk-prod-shake.png":[["desk-prod-shake.d64e2567.png","images/desktop/advantages/desk-prod-shake.png"],"images/desktop/advantages/desk-prod-shake.png"],"./..\\images\\desktop\\about\\desk-about-bg.png":[["desk-about-bg.3c7d8653.png","images/desktop/about/desk-about-bg.png"],"images/desktop/about/desk-about-bg.png"],"./..\\images\\mobile\\about\\desk-about-bg.svg":[["desk-about-bg.7bbb19ea.svg","images/mobile/about/desk-about-bg.svg"],"images/mobile/about/desk-about-bg.svg"],"./..\\images\\desktop\\about\\desk-milk.png":[["desk-milk.76bec218.png","images/desktop/about/desk-milk.png"],"images/desktop/about/desk-milk.png"],"./..\\images\\desktop\\about\\desk-apple.png":[["desk-apple.2961fedf.png","images/desktop/about/desk-apple.png"],"images/desktop/about/desk-apple.png"],"./..\\images\\desktop\\about\\desk-heart.png":[["desk-heart.ac6a2530.png","images/desktop/about/desk-heart.png"],"images/desktop/about/desk-heart.png"],"./..\\images\\desktop\\contacts\\sectionbg2-1.png":[["sectionbg2-1.b9201cd9.png","images/desktop/contacts/sectionbg2-1.png"],"images/desktop/contacts/sectionbg2-1.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50636" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map