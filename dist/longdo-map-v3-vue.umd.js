(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["longdo-map-v3-vue"] = factory();
	else
		root["longdo-map-v3-vue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ldmap-vue-custom-ui[data-v-ec61ad9c]{position:absolute}.ldmap-vue-custom-ui-top[data-v-ec61ad9c]{top:0}.ldmap-vue-custom-ui-bottom[data-v-ec61ad9c]{bottom:0}.ldmap-vue-custom-ui-right[data-v-ec61ad9c]{right:0}.ldmap-vue-custom-ui-left[data-v-ec61ad9c]{left:0}.ldmap-vue-custom-ui-center-x[data-v-ec61ad9c]{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ldmap-vue-custom-ui-center-y[data-v-ec61ad9c]{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ldmap-vue-custom-ui-center[data-v-ec61ad9c]{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ldmap-vue-container[data-v-1074f845]{position:relative;font-family:Tahoma,sans-serif}.ldmap-vue-container[data-v-1074f845],.ldmap-vue-placeholder[data-v-1074f845]{width:100%;height:100%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 333:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(997);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("5b21b8b2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 912:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(933);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("01076d1e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LongdoMap": function() { return /* reexport */ LongdoMap; },
  "LongdoMapCircle": function() { return /* reexport */ Circle; },
  "LongdoMapCustomControl": function() { return /* reexport */ CustomControl; },
  "LongdoMapCustomUi": function() { return /* reexport */ CustomUi; },
  "LongdoMapDot": function() { return /* reexport */ Dot; },
  "LongdoMapMarker": function() { return /* reexport */ Marker; },
  "LongdoMapMenuBar": function() { return /* reexport */ MenuBar; },
  "LongdoMapPolycurve": function() { return /* reexport */ Polycurve; },
  "LongdoMapPolygon": function() { return /* reexport */ Polygon; },
  "LongdoMapPolyline": function() { return /* reexport */ Polyline; },
  "LongdoMapRectangle": function() { return /* reexport */ Rectangle; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./src/manager.js
var manager = {
  apiKey: null,
  src: 'https://api.longdo.com/map3/',
  promise: null,
  beforeInit: null,
  debug: false,
  load: function load(_ref) {
    var _ref$apiKey = _ref.apiKey,
        apiKey = _ref$apiKey === void 0 ? null : _ref$apiKey,
        _ref$src = _ref.src,
        src = _ref$src === void 0 ? null : _ref$src,
        _ref$beforeInit = _ref.beforeInit,
        beforeInit = _ref$beforeInit === void 0 ? null : _ref$beforeInit,
        _ref$debug = _ref.debug,
        debug = _ref$debug === void 0 ? false : _ref$debug;

    if (typeof window === 'undefined') {
      return;
    }

    if (window.longdo) {
      console.warn('Longdo Map Vue: Longdo Map API is already loaded');
      return;
    }

    var url = this.src;

    if (src) {
      url = src;
      this.src = src;
    }

    var params = {};

    if (apiKey) {
      params['key'] = apiKey;
      this.apiKey = apiKey;
    }

    if (debug) {
      params['debug'] = true;
      this.debug = true;
    }

    var query = new URLSearchParams(params);

    if (query) {
      url += "?".concat(query);
    }

    if (beforeInit) {
      this.beforeInit = beforeInit;
    }

    this.importLongdoMap(url);
  },
  initLongdoMap: function initLongdoMap(init) {
    if (window.longdo) {
      if (this.beforeInit) {
        this.beforeInit(window.longdo);
      }

      init();
    } else {
      throw new Error('Longdo Map Vue: Longdo Map API is not found');
    }
  },
  importLongdoMap: function importLongdoMap(url) {
    this.promise = new Promise(function (resolve, reject) {
      var script = document.createElement('script');

      script.onload = function () {
        resolve();
      };

      script.onerror = function () {
        reject();
      };

      script.async = true;
      script.src = url;
      document.body.appendChild(script);
    });
  }
};
/* harmony default export */ var src_manager = (manager);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/LongdoMap.vue?vue&type=template&id=1074f845&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "ldmap-vue-container"
  }, [_c('div', {
    ref: "map",
    staticClass: "ldmap-vue-placeholder"
  }), _vm._t("default")], 2);
};

var staticRenderFns = [];

;// CONCATENATED MODULE: ./src/mixins/mapOptions.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var props = {
  projection: {
    type: String,
    default: null
  },
  layer: {
    type: Array,
    default: null
  },
  zoom: {
    type: Number,
    default: null
  },
  zoomRange: {
    type: Object,
    default: null
  },
  location: {
    type: Object,
    default: null
  },
  ui: {
    type: String,
    default: null
  },
  input: {
    type: Boolean,
    default: null
  },
  autoResize: {
    type: Boolean,
    default: null
  },
  lastView: {
    type: Boolean,
    default: null
  },
  smoothZoom: {
    type: Boolean,
    default: null
  },
  language: {
    type: String,
    default: null
  }
};
/* harmony default export */ var mapOptions = ({
  props: props,
  methods: {
    getMapOptions: function getMapOptions() {
      var options = {};

      for (var key in props) {
        if (this[key] !== null) {
          if (key === 'projection') {
            options.projection = window.longdo.Projections[this.projection];
          } else if (key === 'layer') {
            options.layer = this.getLayers(this.layer);
          } else if (key === 'ui') {
            options.ui = window.longdo.UiComponent[this.ui];
          } else {
            options[key] = this[key];
          }
        }
      }

      return options;
    },
    getLayers: function getLayers(layers) {
      var result = [];

      var _iterator = _createForOfIteratorHelper(layers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var layer = _step.value;
          result.push(window.longdo.Layers[layer]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/LongdoMap.vue?vue&type=script&lang=js&


/* harmony default export */ var LongdoMapvue_type_script_lang_js_ = ({
  name: "LongdoMap",
  mixins: [mapOptions],
  data: function data() {
    return {
      map: null,
      mapPromise: null
    };
  },
  created: function created() {
    var self = this;
    this.mapPromise = src_manager.promise;
    this.mapPromise.then(function () {
      src_manager.initLongdoMap(self.initLongdoMap);
    });
  },
  methods: {
    initLongdoMap: function initLongdoMap() {
      var _this = this;

      var options = this.getMapOptions();
      options.placeholder = this.$refs.map;
      this.map = new window.longdo.Map(options);
      this.$emit("load", this.map);

      if (options.zoomRange) {
        this.map.zoomRange(options.zoomRange);
      }

      this.map.Event.bind("ready", function () {
        _this.$emit("mapReady");

        if (options.language) {
          _this.map.language(options.language);
        }
      });
    }
  },
  init: function init(_ref) {
    var apiKey = _ref.apiKey,
        _ref$src = _ref.src,
        src = _ref$src === void 0 ? undefined : _ref$src,
        _ref$checkApiKey = _ref.checkApiKey,
        checkApiKey = _ref$checkApiKey === void 0 ? true : _ref$checkApiKey;
    src_manager.load({
      apiKey: apiKey,
      src: src,
      checkApiKey: checkApiKey
    });
  }
});
;// CONCATENATED MODULE: ./src/components/LongdoMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LongdoMapvue_type_script_lang_js_ = (LongdoMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/LongdoMap.vue?vue&type=style&index=0&id=1074f845&prod&scoped=true&lang=css&
var LongdoMapvue_type_style_index_0_id_1074f845_prod_scoped_true_lang_css_ = __webpack_require__(912);
;// CONCATENATED MODULE: ./src/components/LongdoMap.vue?vue&type=style&index=0&id=1074f845&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/LongdoMap.vue



;


/* normalize component */

var component = normalizeComponent(
  components_LongdoMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1074f845",
  null
  
)

/* harmony default export */ var LongdoMap = (component.exports);
;// CONCATENATED MODULE: ./src/mixins/childDefault.js
/* harmony default export */ var childDefault = ({
  data: function data() {
    var _this = this;

    return {
      mapReady: new Promise(function (resolve) {
        _this.$parent.$on('mapReady', function () {
          resolve();
        });
      })
    };
  },
  render: function render() {
    return '';
  }
});
;// CONCATENATED MODULE: ./src/mixins/markerOptions.js
var markerOptions_props = {
  location: {
    type: Object,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  icon: {
    type: Object,
    default: null
  },
  detail: {
    type: String,
    default: null
  },
  popup: {
    type: Object,
    default: null
  },
  visibleRange: {
    type: Object,
    default: null
  },
  clickable: {
    type: Boolean,
    default: null
  },
  draggable: {
    type: Boolean,
    default: null
  },
  weight: {
    type: String,
    default: null
  },
  rotate: {
    type: Number,
    default: null
  },
  iconStyle: {
    type: String,
    default: null
  }
};
/* harmony default export */ var markerOptions = ({
  props: markerOptions_props,
  methods: {
    getMarkerOptions: function getMarkerOptions() {
      var options = {};

      for (var key in markerOptions_props) {
        if (this[key] !== null) {
          if (key === 'weight') {
            var weightVal = window.longdo.OverlayWeight[this.weight];

            if (weightVal) {
              options.weight = weightVal;
            }
          } else if (key === 'iconStyle') {
            options.style = this[key];
          } else {
            options[key] = this[key];
          }
        }
      }

      return options;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Marker.js


/* harmony default export */ var Marker = ({
  name: 'LongdoMarker',
  mixins: [childDefault, markerOptions],
  data: function data() {
    return {
      marker: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.mapReady.then(function () {
      _this.addMarker(_this.location, _this.getMarkerOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.marker);
  },
  methods: {
    addMarker: function addMarker(location, options) {
      this.marker = new window.longdo.Marker(location, options);
      this.$parent.map.Overlays.add(this.marker);
      this.$emit('add', this.marker);
    }
  }
});
;// CONCATENATED MODULE: ./src/mixins/geometryOptions.js
var geometryOptions_props = {
  location: {
    type: Object | Array,
    default: null
  },
  radius: {
    type: Number,
    default: null
  },
  size: {
    type: Number | Object,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  detail: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: null
  },
  labelOptions: {
    type: Object,
    default: null
  },
  popup: {
    type: Object,
    default: null
  },
  visibleRange: {
    type: Object,
    default: null
  },
  lineWidth: {
    type: Number,
    default: null
  },
  lineColor: {
    type: String,
    default: null
  },
  fillColor: {
    type: String,
    default: null
  },
  lineStyle: {
    type: String,
    default: null
  },
  pivot: {
    type: Object,
    default: null
  },
  clickable: {
    type: Boolean,
    default: null
  },
  editable: {
    type: Boolean,
    default: null
  },
  pointer: {
    type: Boolean,
    default: null
  },
  draggable: {
    type: Boolean,
    default: null
  },
  rotatable: {
    type: Boolean,
    default: null
  },
  weight: {
    type: String,
    default: null
  },
  texture: {
    type: String,
    default: null
  },
  textureAlpha: {
    type: Number,
    default: null
  },
  linePattern: {
    type: String,
    default: null
  }
};
/* harmony default export */ var geometryOptions = ({
  props: geometryOptions_props,
  methods: {
    getGeometryOptions: function getGeometryOptions() {
      var options = {};

      for (var key in geometryOptions_props) {
        if (this[key] !== null) {
          if (key === 'weight') {
            var weightVal = window.longdo.OverlayWeight[this.weight];

            if (weightVal) {
              options.weight = weightVal;
            }
          } else if (key === 'lineStyle') {
            options.lineStyle = window.longdo.LineStyle[this.lineStyle];
          } else {
            options[key] = this[key];
          }
        }
      }

      return options;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Dot.js


/* harmony default export */ var Dot = ({
  name: 'LongdoDot',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      dot: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addDot(self.location, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.dot);
  },
  methods: {
    addDot: function addDot(location, options) {
      this.dot = new window.longdo.Dot(location, options);
      this.$parent.map.Overlays.add(this.dot);
      this.$emit('add', this.dot);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Circle.js


/* harmony default export */ var Circle = ({
  name: 'LongdoCircle',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      circle: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addCircle(self.location, self.radius, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.circle);
  },
  methods: {
    addCircle: function addCircle(location, radius, options) {
      this.circle = new window.longdo.Circle(location, radius, options);
      this.$parent.map.Overlays.add(this.circle);
      this.$emit('add', this.circle);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Rectangle.js


/* harmony default export */ var Rectangle = ({
  name: 'LongdoRectangle',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      rectangle: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addRectangle(self.location, self.size, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.rectangle);
  },
  methods: {
    addRectangle: function addRectangle(location, size, options) {
      this.rectangle = new window.longdo.Rectangle(location, size, options);
      this.$parent.map.Overlays.add(this.rectangle);
      this.$emit('add', this.rectangle);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Polygon.js


/* harmony default export */ var Polygon = ({
  name: 'LongdoPolygon',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      polygon: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addPolygon(self.location, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.polygon);
  },
  methods: {
    addPolygon: function addPolygon(location, options) {
      this.polygon = new window.longdo.Polygon(location, options);
      this.$parent.map.Overlays.add(this.polygon);
      this.$emit('add', this.polygon);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Polyline.js


/* harmony default export */ var Polyline = ({
  name: 'LongdoPolyline',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      polyline: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addPolyline(self.location, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.polyline);
  },
  methods: {
    addPolyline: function addPolyline(location, options) {
      this.polyline = new window.longdo.Polyline(location, options);
      this.$parent.map.Overlays.add(this.polyline);
      this.$emit('add', this.polyline);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Polycurve.js


/* harmony default export */ var Polycurve = ({
  name: 'LongdoPolycurve',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      polycurve: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addPolycurve(self.location, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.polycurve);
  },
  methods: {
    addPolycurve: function addPolycurve(location, options) {
      this.polycurve = new window.longdo.Polycurve(location, options);
      this.$parent.map.Overlays.add(this.polycurve);
      this.$emit('add', this.polycurve);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/MenuBar.js

/* harmony default export */ var MenuBar = ({
  name: 'MenuBar',
  mixins: [childDefault],
  data: function data() {
    return {
      menuBar: null
    };
  },
  props: {
    button: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dropdown: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dropdownLabel: {
      type: String,
      default: null
    }
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addMenuBar();
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Ui.remove(this.menuBar);
  },
  methods: {
    addMenuBar: function addMenuBar() {
      var _this = this;

      var options = {};

      if (this.button.length) {
        options.button = this.button;
      }

      if (this.dropdown.length) {
        options.dropdown = this.dropdown;
      }

      if (this.dropdownLabel) {
        options.dropdownLabel = this.dropdownLabel;
      }

      options.change = function (currentMenuItem, lastMenuItem) {
        _this.$emit('change', currentMenuItem, lastMenuItem);
      };

      this.menuBar = new window.longdo.MenuBar(options);
      this.$parent.map.Ui.add(this.menuBar);
      this.$emit('add', this.menuBar);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/CustomControl.js

/* harmony default export */ var CustomControl = ({
  name: 'CustomControl',
  mixins: [childDefault],
  data: function data() {
    return {
      customControl: null
    };
  },
  props: {
    html: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addCustomControl();
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Ui.remove(this.customControl);
  },
  methods: {
    addCustomControl: function addCustomControl() {
      this.customControl = new window.longdo.CustomControl(this.html);
      this.$parent.map.Ui.add(this.customControl);
      this.$emit('add', this.customControl);
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CustomUi.vue?vue&type=template&id=ec61ad9c&scoped=true&
var CustomUivue_type_template_id_ec61ad9c_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    class: _vm.position
  }, [_vm._t("default")], 2);
};

var CustomUivue_type_template_id_ec61ad9c_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CustomUi.vue?vue&type=script&lang=js&

/* harmony default export */ var CustomUivue_type_script_lang_js_ = ({
  name: 'CustomUi',
  mixins: [childDefault],
  props: {
    vertical: {
      type: String,
      default: 'top'
    },
    horizontal: {
      type: String,
      default: 'left'
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    position: function position() {
      if (this.custom) {
        return;
      }

      var center = this.vertical === 'center' && this.horizontal === 'center';
      var defaultV = this.vertical !== 'top' && this.vertical !== 'center' && this.vertical !== 'bottom';
      return {
        'ldmap-vue-custom-ui': true,
        'ldmap-vue-custom-ui-top': this.vertical === 'top' || defaultV,
        'ldmap-vue-custom-ui-bottom': this.vertical === 'bottom',
        'ldmap-vue-custom-ui-right': this.horizontal === 'right',
        'ldmap-vue-custom-ui-left': this.horizontal === 'left',
        'ldmap-vue-custom-ui-center-y': this.vertical === 'center' && !center,
        'ldmap-vue-custom-ui-center-x': this.horizontal === 'center' && !center,
        'ldmap-vue-custom-ui-center': center
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/components/CustomUi.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CustomUivue_type_script_lang_js_ = (CustomUivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/CustomUi.vue?vue&type=style&index=0&id=ec61ad9c&prod&scoped=true&lang=css&
var CustomUivue_type_style_index_0_id_ec61ad9c_prod_scoped_true_lang_css_ = __webpack_require__(333);
;// CONCATENATED MODULE: ./src/components/CustomUi.vue?vue&type=style&index=0&id=ec61ad9c&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/CustomUi.vue



;


/* normalize component */

var CustomUi_component = normalizeComponent(
  components_CustomUivue_type_script_lang_js_,
  CustomUivue_type_template_id_ec61ad9c_scoped_true_render,
  CustomUivue_type_template_id_ec61ad9c_scoped_true_staticRenderFns,
  false,
  null,
  "ec61ad9c",
  null
  
)

/* harmony default export */ var CustomUi = (CustomUi_component.exports);
;// CONCATENATED MODULE: ./src/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var components = {
  install: function install(Vue, userOptions) {
    var options = _objectSpread({
      installComponents: true,
      tagPrefix: ''
    }, userOptions);

    if (options.load) {
      src_manager.load(options.load);
    }

    if (options.installComponents) {
      var prefix = options.tagPrefix !== '' ? "".concat(options.tagPrefix, "-") : options.tagPrefix;
      Vue.component("".concat(prefix, "longdo-map"), LongdoMap);
      Vue.component("".concat(prefix, "longdo-map-marker"), Marker);
      Vue.component("".concat(prefix, "longdo-map-dot"), Dot);
      Vue.component("".concat(prefix, "longdo-map-circle"), Circle);
      Vue.component("".concat(prefix, "longdo-map-rectangle"), Rectangle);
      Vue.component("".concat(prefix, "longdo-map-polygon"), Polygon);
      Vue.component("".concat(prefix, "longdo-map-polyline"), Polyline);
      Vue.component("".concat(prefix, "longdo-map-polycurve"), Polycurve);
      Vue.component("".concat(prefix, "longdo-map-menu-bar"), MenuBar);
      Vue.component("".concat(prefix, "longdo-map-custom-control"), CustomControl);
      Vue.component("".concat(prefix, "longdo-map-custom-ui"), CustomUi);
    }
  }
};
/* harmony default export */ var src_0 = (components);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=longdo-map-v3-vue.umd.js.map