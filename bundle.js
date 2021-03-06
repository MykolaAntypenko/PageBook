/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(6);

__webpack_require__(8);

var _sorting = __webpack_require__(17);

var _scroll = __webpack_require__(18);

var _animation = __webpack_require__(19);

var _views = __webpack_require__(20);

var _tabs = __webpack_require__(21);

var sortpopular = document.getElementById("popular");
sortpopular.addEventListener("click", function () {
	return (0, _sorting.sortablepopular)(".blocks", "data-popular");
});
sortpopular.addEventListener("click", _sorting.hidden1);

var sortnew = document.getElementById("new");
sortnew.addEventListener("click", function () {
	return (0, _sorting.sortablenew)(".blocks", "data-new");
});
sortnew.addEventListener("click", _sorting.hidden1);

(0, _scroll.scroll)();

var menu = document.querySelector("#nav-toggle");
menu.addEventListener("change", _animation.animationMenu);
var menuclose = document.querySelector("#close");
menuclose.addEventListener("change", _animation.closeMenu);
var menuMobile = document.querySelector("#nav-toggle__mobile");
menuMobile.addEventListener("change", _animation.animationMobile);
var menuclose = document.querySelector("#close");
menuclose.addEventListener("change", _animation.closeMobile);
(0, _views.modalWin)();

var tabTeen = document.querySelector(".teenSide");
tabTeen.addEventListener("click", _tabs.tabsTeen);
var tabKid = document.querySelector(".babySide");
tabKid.addEventListener("click", _tabs.tabsKids);
var tabAll = document.querySelector(".allSide");
tabAll.addEventListener("click", _tabs.tabsAll);

var tabTeenMobile = document.querySelector(".teenMobile");
tabTeenMobile.addEventListener("click", _tabs.tabsTeen);
tabTeenMobile.addEventListener("click", function () {
	tabTeenMobile.style.borderBottom = "3px solid #FBBC16";
	tabKidMobile.style.borderBottom = "3px solid #FFFFFF";
	tabAllMobile.style.borderBottom = "3px solid #FFFFFF";
});
var tabKidMobile = document.querySelector(".babyMobile");
tabKidMobile.addEventListener("click", _tabs.tabsKids);
tabKidMobile.addEventListener("click", function () {
	tabKidMobile.style.borderBottom = "3px solid #FBBC16";
	tabAllMobile.style.borderBottom = "3px solid #FFFFFF";
	tabTeenMobile.style.borderBottom = "3px solid #FFFFFF";
});
var tabAllMobile = document.querySelector(".allMobile");
tabAllMobile.addEventListener("click", _tabs.tabsAll);
tabAllMobile.addEventListener("click", function () {
	tabAllMobile.style.borderBottom = "3px solid #FBBC16";
	tabTeenMobile.style.borderBottom = "3px solid #FFFFFF";
	tabKidMobile.style.borderBottom = "3px solid #FFFFFF";
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 10px;\r\n}\r\n\r\n\r\n/*header start*/\r\nheader {\r\n\tposition: relative;\r\n\tz-index: 99999;\r\n\tborder-bottom: 1px solid lightgrey;\r\n}\r\n\r\n.left_header {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\r\n}\r\n\r\n.logo {\r\n\twidth: 10%;\r\n\theight: 20%;\r\n\tposition: relative;\r\n}\r\n\r\n.logo-img {\r\n\twidth: auto;\r\n\tpadding: 20px;\r\n\tborder-right: 2px solid lightgrey;\r\n}\r\n\r\n.for_all { \r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin-left: 30px;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n.for_all-menu {\r\n\tbackground-color: #FBBC16;\r\n\ttext-decoration: none;\r\n\tcolor: #000000;\r\n\tfont-family: ProximaNova-Semibold;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.8rem;\r\n\tpadding: 5px 15px;\r\n\tborder-radius: 20px;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n\r\n#menu_body li ul {\r\n\tdisplay: none;\r\n\t}\r\n\r\n#sub_menu {\r\n\tposition: fixed;\r\n\twidth: 200px;\r\n\theight: 150px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 0 auto;\r\n\ttop: 30px;\r\n\ttext-align: center;\r\n\tz-index: 0;\r\n}\r\n\r\n#menu_body li:hover ul, #menu_body li.over ul {\r\n\tdisplay: block;\r\n\t}\r\n\r\n #menu_body {\r\n    width: 200px;\r\n    }\r\n\r\n#menu_body a {\r\n\tdisplay: block;\r\n\twidth: 200px;\r\n\theight: auto;\r\n\tpadding: 12px 0px;\r\n\tfont-family: ProximaNova-Semibold;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.8rem;\r\n\t} \r\n\r\n#menu_body ul li {\r\n    list-style-type: none;\r\n    } \r\n\r\n#menu_body ul li a {\r\n    color: #000000;\r\n    text-decoration: none;\r\n\tfont-size: 1.5rem;\r\n    } \r\n\r\n#menu_body ul li a:hover {\r\n    color: #50a9d2;\r\n    text-decoration: none;\r\n\tbackground:#FBBC16;\r\n    } \r\n\r\n#menu_body ul li ul li {\r\n    border: 0;\r\n    list-style-type: none;\r\n    color: #fff;\r\n    list-style-position: inside;\r\n\tbackground: #FBBC16;\r\n    } \r\n\r\n.right-menu {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n}\r\n\r\n.right-menu__list {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tlist-style-type: none;\r\n\tpadding: 20px;\r\n\tborder-right: 2px solid lightgrey;\r\n}\r\n\r\n.right-menu__list .right-menu__list--item a {\r\n\tfont-size: 1.4rem;\r\n\tfont-family: Lora-Regular;\r\n\tfont-weight: bold;\r\n\ttext-decoration: none;\r\n\tpadding: 10px;\r\n\tcolor: #000000;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.magnifier,\r\n.bookmark {\r\n\tborder:none;\r\n\tpadding: 20px;\r\n}\r\n\r\n.menu-mobile {\r\n\tdisplay: none;\r\n}\r\n\r\n.section-part1 {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n\r\n.navbar {\r\n\theight: 100vh;\r\n\ttop: 0;\r\n\twidth: 5%;\r\n\tposition: fixed;\r\n\tbackground-color: #FFFFFF;\r\n\tz-index: 999; \r\n\tpadding-top: 60px;\r\n}\r\n\r\n.navigation-menu {\r\n\tdisplay: none;\r\n\tposition: relative;\r\n\tleft: -80px;\r\n}\r\n\r\n.navigation-menu__item {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n\tpadding-left: 20%;\r\n}\r\n\r\n.navigation-menu__item-uppercase {\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#nav-toggle:checked ~ .section-part1 .navbar .nav-menu .navigation-menu,\r\n#nav-toggle__mobile:checked ~ .section-part1 .navbar .nav-menu .navigation-menu {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n}\r\n\r\n.nav-menu {\r\n\tdisplay: flex;\r\nflex-direction: row;\r\njustify-content: flex-start;\r\nwidth: 100%;\r\n}\r\n\r\n.nav-menu label {\r\n\tmargin-top: 60px;\r\n\tfont-size: 2.2rem;\r\n\tpadding-top: 20px;\r\n\tpadding-left: 20px;\r\n\tfont-family: ProximaNova-Semibold;\r\n}\r\n\r\nlabel[for=\"close\"] {\r\n\tcursor: pointer;\r\n}\r\n\r\n.nav-menu .navigation-menu {\r\n\talign-self: center;\r\n\twidth: 100%;\r\n\tmargin-left: 30%;\r\n}\r\n\r\n\r\n.nav-menu .navigation-menu a {\r\n\ttext-align: left;\r\n}\r\n\r\n.nav-menu .navigation-menu a:before {\r\n\tcontent: \" \";\r\n\twidth: 30px;\r\n\theight: 3px;\r\n\tbackground: #FBBC16;\r\n\tdisplay: block;\r\n\topacity: 0;\r\n\tmargin: 0 0 -10px -50px;\r\n}\r\n\r\n.nav-menu .navigation-menu a:hover:before {\r\n\topacity: 1;\r\n}\r\n\r\n.section-part1 .navbar .nav-menu label {\r\n\tdisplay: none;\r\n}\r\n\r\n#nav-toggle:checked ~ .section-part1 .navbar .nav-menu label,\r\n#nav-toggle__mobile:checked ~ .section-part1 .navbar .nav-menu label {\r\n\tdisplay: block;\r\n}\r\n\r\n#nav-toggle:checked ~ .section-part1 .navbar  label .burger__img,\r\n#nav-toggle__mobile:checked ~ .section-part1 .navbar  label .burger__img {\r\n\tdisplay: none;\r\n}\r\n\r\n#close:checked ~ .section-part1 .navbar  .nav-menu label[for=\"close\"]\r\n {\r\n\tdisplay: none;\r\n}\r\n\r\n#close:checked ~ .section-part1 .navbar  label .burger__img {\r\n\tdisplay: flex;\r\n}\r\n\r\n#nav-toggle:checked ~ .section-part1 .navbar,\r\n#nav-toggle__mobile:checked ~ .section-part1 .navbar {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\nz-index: 999;\r\n}\r\n\r\n#close:checked ~ .section-part1 .navbar {\r\n\twidth: 5%;\r\n\ttransition: width 0.5s;\r\n}\r\n\r\n#close:checked ~ .section-part1 .navbar .nav-menu .navigation-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n\r\n\r\nlabel[for=\"close\"]:hover {\r\n\tcolor: #FBBC16;\r\n}\r\n\r\n\r\n.navigation-menu {\r\n\tlist-style-type: none;\r\n}\r\n\r\n.navigation-menu__item {\r\n\tpadding-bottom: 30px;\r\n\r\n} \r\n\r\n.navbar .nav-menu label {\r\n\tposition: relative;\r\n\ttop: -50px;\r\n}\r\n\r\n\r\n.navigation-menu__item a{\r\n\tfont-family: ProximaNova-Semibold;\r\n\tfont-size: 1.8rem;\r\n\tcolor: #000000;\r\n} \r\n\r\n.navbar a {\r\n\ttext-decoration: none;\r\n}\r\n\r\nlabel[for=\"nav-toggle\"] {\r\n\tcursor: pointer;\r\n}\r\n\r\nlabel[for=\"nav-toggle__mobile\"] {\r\n\tcursor: pointer;\r\n}\r\n\r\n.burger__img {\r\n\tdisplay: block;\r\n\tpadding: 20px;\r\n}\r\n/*header end*/\r\n/*content start*/\r\n.block-background{\r\n\tposition: relative;\r\n\twidth: auto;\r\n}\r\n\r\n.block-background__image {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tz-index: -1;\r\n\tposition: relative;\r\n}\r\n\r\n.block-background__content {\r\n\tposition: absolute;\r\n\ttop: 150px;\r\n\tmargin-left: 100px;\r\n\theight: auto;\r\n}\r\n\r\n.block-image {\r\n\twidth: 95%;\r\n\theight: auto;\r\n\tmargin-left: 5%;\r\n\tposition: relative;\r\n}\r\n\r\n\r\n.block-image__article {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.8rem;\r\n\tcolor: #FBBC16;\r\n\tfont-weight: bold;\r\n\tpadding-bottom: 3rem;\r\n}\r\n\r\n.block-image__header {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 3.2rem;\r\n\twidth: 80%;\r\n\tcolor: #FFFFFF;\r\n\tfont-weight: bold;\r\n\tpadding-bottom: 3rem;\r\n}\r\n\r\n.block-date  {\r\n\twidth: 40%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 3rem;\r\n}\r\n\r\n.block-calendar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.block-view {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.block-date img {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n}\r\n\r\n.block-date span {\r\n\tdisplay: inline-block;\r\n\tmargin: 0px 15px;\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.6rem;\r\n\tcolor: #FFFFFF;\r\n}\r\n\r\n.block-image__article--uppercase {\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.block-button {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: 15%;\r\n\tpadding-bottom: 3rem;\r\n}\r\n\r\n.block-button__reader1,\r\n.block-button__reader2, \r\n.block-button__reader3, \r\n.block-button__reader4  {\r\n\tbackground-color: #FBBC16;\r\n\tpadding: 10px 25px;\r\n\tcolor: #000000;\r\n\tfont-family: ProximaNova-Extrabld;\r\n\tfont-size: 1.6rem; \r\n\tborder-radius: 20px;\r\n\tmargin-right: 30px;\r\n\tborder: 2px solid #FFFFFF;\r\n\tcursor: pointer;\r\n}\r\n\r\n.block-button__reader1:focus,\r\n.block-button__reader2:focus,\r\n.block-button__reader3:focus,\r\n.block-button__reader4:focus {\r\n\toutline: none;\r\n}\r\n\r\n.block-button__reader1:hover,\r\n.block-button__reader2:hover,\r\n.block-button__reader3:hover,\r\n.block-button__reader4:hover {\r\n\tbackground-color: #FFFFFF;\r\n\tcolor: #000000;\r\n\tborder: 2px solid #FBBC16;\r\n\tcursor: pointer;\r\n}\r\n\r\n.block-sorting {\r\n\tmargin-left: 10%;\r\n\tmargin-top: 30px; \r\n}\r\n\r\n.block-sorting span {\r\n\tfont-family: ProximaNova-Semibold;\r\n\tfont-size: 2rem;\r\n\tcolor: #424141;\r\n\tfont-weight: bold;\r\n\tpadding-right: 10px;\r\n\tpadding-left: 10px;\r\n}\r\n.block-sorting a {\r\n\ttext-decoration: none;\r\n\tfont-family: ProximaNova-Semibold;\r\n\tfont-size: 2rem;\r\n\tcolor: #424141;\r\n\tpadding-right: 10px;\r\n\tpadding-left: 10px;\r\n\tcursor: pointer;\r\n}\r\n\r\n\r\n.block-sorting .sort-popular,\r\n.block-sorting .sort-new,\r\n.block-sorting .sort-reject {\r\n\tborder: none;\r\n\tbackground-color: #FFFFFF;\r\n\tcolor: #424141;\r\n\tfont-family: ProximaNova-Semibold;\r\n\tfont-size: 2rem;\r\n\tpadding: 0 15px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.block-sorting .sort-popular:hover,\r\n.block-sorting .sort-new:hover,\r\n.block-sorting .sort-reject:hover {\r\n\tcolor: #FBBC16;\r\n}\r\n\r\n.block-sorting .sort-popular,\r\n.block-sorting .sort-new\r\n {\r\n\tborder-right: 2px solid #424141;\r\n}\r\n\r\n\r\n.sort-popular:focus,\r\n.sort-new:focus,\r\n.sort-reject:focus {\r\n\toutline: none;\r\n}\r\n\r\n.section-part2 {\r\n\theight: 500px;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tposition: relative;\r\n\t\r\n}\r\n\r\n.img-part2 {\r\n\twidth: 45%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: absolute;\r\n\tleft: 10%;\r\n\tz-index: -1;\r\n}\r\n\r\n.block-card {\r\n\twidth: 30%;\r\n\theight: 45%;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tposition: absolute;\r\n\ttop: 35%;\r\n\tright: 18%;\r\n\tz-index: 1000;\r\n}\r\n\r\n\r\n.block-information {\r\n\tborder:1px solid #000000;\r\n\theight: 90%;\r\n\tbackground-color: #FFFFFF;\r\n\tpadding-left: 30px; \r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.block-text--uppercase {\r\n\ttext-transform: uppercase;\r\n\tcolor: #FBBC16;\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.6rem;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.block-information__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 2rem;\r\n\tcolor: #716E6E;\r\n\twidth: 90%;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.block-information__text:before {\r\n\tcontent: \"\\A0\\A0\\A0\";\r\n\twidth: 10%;\r\n\tborder-top: 3px solid red;\r\n\tposition: absolute;\r\n\tleft: -5%;\r\n}\r\n\r\n.block-information__content {\r\n\tpadding: 20px 0;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tposition: relative;\r\n}\r\n\r\n\r\n\r\n.block-information__date {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n.block-information__date img,\r\n.block-information__date span,\r\n.block-information__view img,\r\n.block-information__view span {\r\n\tpadding: 0 5px;\r\n}\r\n\r\n.block-information__view {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tmargin-left: 60px;\r\n}\r\n\r\n.block-information__date span {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.4rem;\r\n}\r\n\r\n.block-information__view span {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.4rem;\r\n}\r\n\r\n.button-read {\r\n\tpadding-top: 20px;\r\n\tposition: relative;\r\n\tbottom: 1rem;\r\n}\r\n\r\n.block-information__bookmark {\r\n\tposition: absolute;\r\n\tbottom: -25%;\r\n\tright: 5%;\r\n}\r\n\r\n\r\n.block-cards {\r\n\tdisplay: flex;\r\n\twidth: 80%;\r\n\tjustify-content: space-between;\r\n\tflex-wrap: wrap;\r\n    margin-left: 10%;\r\n}\r\n\r\n.block-cards__card1 {\r\n   width: 30%;\r\n   height:100%;\r\n\tposition: relative;\r\n}\r\n\r\n.block-cards__card2 {\r\n   width: 30%;\r\n   height:100%;\r\n\tposition: relative;\r\n}\r\n\r\n.block-cards__card3 {\r\n   width: 30%;\r\n   height:100%;\r\n\tposition: relative;\r\n}\r\n\r\n.card1__text {\r\n\tfont-family: Lore_Regular;\r\n\tfont-size: 1.8rem;\r\n\tcolor: #FBBC16;\r\n\tpadding-bottom: 20px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.card1__image {\r\n\twidth: 100%;\r\n}\r\n\r\n.block-card1__information {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\twidth: 70%;\r\n\r\n}\r\n\r\n.calendar__date,\r\n.view {\r\n\tfont-family: Lore_Regular;\r\n\tfont-size: 1.6rem;\r\n}\r\n\r\n.block-card__image {\r\n\tposition: relative;\r\n}\r\n\r\n.card1__bookmark {\r\n\tposition: absolute;\r\n\tright: 5%;\r\n\tbottom: -5%;\r\n}\r\n\r\n.cards-calendar,\r\n.cards-view {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin: 10px 0;\r\n\t\r\n\r\n}\r\n\r\n.cards-calendar img,\r\n.cards-view img{\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.cards__maintext {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.8rem;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.section-part4 {\r\n\twidth: 80%;\r\n\tmargin-left: 10%;\r\n\tmargin-top: 5%;\r\n}\r\n\r\n.block-part4 {\r\n\tbackground-size: cover;\r\n\theight: 430px;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: relative;\r\n}\r\n\r\n.block-part4__image {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.section-part4__header {\r\n\ttext-transform: uppercase;\r\n\tcolor: #FBBC16;\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.6rem;\r\n\tmargin-bottom: 5%;\r\n}\r\n\r\n.block-part4__information {\r\n\tborder:1px solid #000000;\r\n\theight: 55%;\r\n\tbackground-color: #FFFFFF;\r\n\tpadding-left: 30px; \r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n\twidth: 50%;\r\n\tposition: absolute;\r\n\tleft: 3%;\r\n\ttop: 15%;\r\n}\r\n\r\n.blockpart4-information__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 2.6rem;\r\n\tcolor: #716E6E;\r\n\twidth: 80%;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.blockpart4-information__bookmark {\r\n\tposition: absolute;\r\n\tright: 5%;\r\n\tbottom: -5%;\r\n}\r\n\r\n.blockpart4-information__text:before {\r\n\tcontent: \"\\A0\\A0\\A0\";\r\n\twidth: 6%;\r\n\tborder-top: 3px solid red;\r\n\tposition: absolute;\r\n\tleft: -3%;\r\n}\r\n\r\n.section-part5,\r\n.section-part7 {\r\n\tmargin-top: 5%;\r\n}\r\n\r\n.section-part6 {\r\n\twidth: 90%;\r\n\theight: 500px;\r\n\tmargin-left: 10%;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tposition: relative;\r\n}\r\n\r\n.img-part6 {\r\n\twidth: 45%;\r\n\theight: 50%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: absolute;\r\n\tright: 10%;\r\n\tz-index: -1;\r\n}\r\n\r\n.blockpart6-card {\r\n\twidth: 40%;\r\n\theight: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tposition: absolute;\r\n\ttop: 20%;\r\n\tleft: 7%;\r\n\tz-index: 1;\r\n}\r\n\r\n\r\n.blockpart6-information {\r\n\tborder:1px solid #000000;\r\n\theight: 90%;\r\n\tbackground-color: #FFFFFF;\r\n\tpadding-left: 30px; \r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.blockpart6-text--uppercase {\r\n\ttext-transform: uppercase;\r\n\tcolor: #FBBC16;\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.6rem;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tpadding: 10px 0 20px 0;\r\n}\r\n\r\n.blockpart6-information__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 2rem;\r\n\tcolor: #716E6E;\r\n\twidth: 90%;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n\tposition: relative;\r\n\ttext-align: right;\r\n}\r\n\r\n.blockpart6-information__text:after {\r\n\tcontent: \"\\A0\\A0\\A0\";\r\n\twidth: 6%;\r\n\tborder-top: 3px solid red;\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: -15%;\r\n}\r\n\r\n.blockpart6-information__content {\r\n\tpadding: 20px 0;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n\r\n\r\n\r\n.blockpart6-information__date {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n.blockpart6-information__date img,\r\n.blockpart6-information__date span,\r\n.blockpart6-information__view img,\r\n.blockpart6-information__view span {\r\n\tpadding: 0 5px;\r\n}\r\n\r\n.blockpart6-information__view {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tmargin-left: 60px;\r\n}\r\n\r\n.blockpart6-information__date span {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.4rem;\r\n}\r\n\r\n.blockpart6-information__view span {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.4rem;\r\n}\r\n\r\n.buttonpart6-read {\r\n\tpadding-top: 20px;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\tpadding-right: 60px;\r\n}\r\n\r\n.blockpart6-information__bookmark {\r\n\tposition: absolute;\r\n\tbottom: -30%;\r\n\tleft: 5%;\r\n}\r\n\r\n.block-showmore {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\tmargin: 50px 0;\r\n}\r\n\r\n.block-showmore__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.4rem;\r\n\tcolor: #000000;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.back_to_top {\r\n  position: fixed;\r\n  bottom: 40px;\r\n  right: 10px;\r\n  z-index: 999999;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  line-height: 30px;\r\n\r\n  color:#2C3E50;\r\n  cursor: pointer;\r\ndisplay: none;\r\n  font-size: 24px;\r\n  border: 2px solid #2C3E50;\r\n}\r\n\r\n.back_to_top:hover {\r\n  background: #FFFFFF;\r\n  border: 2px solid #FBBC16;\r\n  color: #FBBC16;\r\n}\r\n\r\n.back_to_top-show {\r\n  display: block;\r\n}\r\n/*content \r\n/*footer start*/\r\n.footer {\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tz-index: 9999;\r\n\tbackground: #EBEBEB;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: center;\r\n\tpadding: 50px 0;\r\n\r\n}\r\n\r\n.footer__email {\r\n\twidth: 30%;\r\n}\r\n\r\n#footer_email {\r\n\tborder:none;\r\n\tborder-bottom: 2px solid #000000;\r\n\toutline: none;\r\n\tbackground:#EBEBEB; \r\n\theight: 20px;\r\n\twidth: 80%;\r\n}\r\n\r\n.footer__email-text,\r\n.footer__social-text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.6rem;\r\n\tcolor: #959595;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.footer__email-sign {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.6rem;\r\n\tcolor: #959595;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.footer__social {\r\n\twidth: 30%;\r\n}\r\n\r\n.social {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: 60%;\r\n\tmargin: 30px auto 0 auto;\r\n}\r\n\r\n.footer__about {\r\n\twidth: 30%;\r\n}\r\n\r\n.footer__about-text {\r\n\twidth: 80%;\r\n\tmargin: 0 auto;\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1rem;\r\n\tcolor: #959595;\r\n\ttext-align: justify;\r\n}\r\n/*footer end*/\r\n\r\n/*media queries*/\r\n@media (max-width: 1360px) {\r\n  .for_all { \r\n\tmargin-left: 70px;\r\n}\r\n }\r\n\r\n @media (max-width: 1200px) {\r\n  .block-information__bookmark {\r\n\tposition: absolute;\r\n\tbottom: -15%;\r\n\tright: 5%;\r\n}\r\n }\r\n\r\n @media (max-width: 1100px) {\r\n  .block-background__content { \r\n\ttop: 100px;\r\n}\r\n }\r\n\r\n  @media (max-width: 1100px) {\r\n  .block-background__content { \r\n\ttop: 80px;\r\n}\r\n\r\n.block-image__article--uppercase {\r\n\tfont-size: 1.6rem;\r\n }\r\n\r\n .block-image__header {\r\n \tfont-size: 2.4rem;\r\n }\r\n\r\n .block-date {\r\n \twidth: 60%;\r\n }\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n\t.block-card1__information{\r\n\t\tflex-direction: column;\r\n\t}\r\n\t.cards-calendar,\r\n\t.cards-view {\r\n\twidth: 100%;\r\n\t}\r\n\r\n\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n\t.block-information__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 2rem;\r\n\tcolor: #716E6E;\r\n\twidth: 120%;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.blockpart6-information__text {\r\n\tfont-size: 2rem;\r\n}\r\n.navbar {\r\n\t\twidth: 8%;\r\n\t}\r\n\r\n\r\n}\r\n\r\n@media (max-width: 992px) {\r\n\r\n\r\nlabel[for=\"close\"] {\r\n\tmargin-top: 100px;\r\n}\r\n\r\n\t.block-background__content {\r\n\tposition: absolute;\r\n\ttop: 100px;\r\n\tmargin-left: 100px;\r\n\theight: auto;\r\n}\r\n\r\n.block-background{\r\n\twidth: auto;\r\n}\r\n\t.block-information__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 2rem;\r\n\tcolor: #716E6E;\r\n\twidth: 120%;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.blockpart6-information__text {\r\n\tfont-size: 2rem;\r\n}\r\n.navbar {\r\n\t\twidth: 8%;\r\n\t}\r\n\r\n.left_header, .right-menu {\r\n\tdisplay: none;\r\n}\r\n.menu-mobile {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\nheader {\r\n\tborder-bottom: 3px solid lightgrey;\r\n}\r\n\r\n.top-side {\r\n\twidth: 90%;\r\n\tmargin: 0 auto;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.logo-img {\r\n\tborder: none;\r\n}\r\n.bottom-side {\r\n\twidth: 90%;\r\n\tmargin: 0 auto;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\tmargin-bottom: 10px; \r\n}\r\n\r\n.bottom-side a {\r\n\tfont-family: ProximaNova-SemiBold;\r\n\tfont-size: 2rem;\r\n\tcolor: #000000;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n\tborder-bottom: 3px solid #FFFFFF;\r\n}\r\n\r\n.bottom-side a:hover {\r\n\tborder-bottom: 3px solid #FBBC16;\r\n}\r\n\r\n.navbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.block-image__article {\r\n\tcolor: #F70606;\r\n}\r\n\r\n.block-image__header {\r\n\tcolor: #FBBC16;\r\n}\r\n\r\nspan.block-calendar__date,\r\nspan.block-view__date {\r\n\tcolor: #FBBC16;\r\n}\r\n\r\n.section-part2 {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t\tposition: relative;\r\n}\r\n\r\n.img-part2 {\r\n\twidth: 70%;\r\n\theight: 40%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: static;\r\n\tz-index: -1;\r\n}\r\n\r\n.block-card {\r\n\twidth: 60%;\r\n\theight: 35%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tz-index: 1000;\r\n\ttop: 65%;\r\n}\r\n\r\n.block-text--uppercase {\r\n\tdisplay: none;\r\n}\r\n\r\n.block-information__bookmark {\r\n\tbottom: -15%;\r\n\tright: 25%;\r\n}\r\n\r\n.block-information__text:before {\r\n\tcontent: \"\\A0\\A0\\A0\";\r\n\twidth: 10%;\r\n\tborder-top: none; \r\n}\r\n\r\n.block-information__text {\r\n\twidth: 90%;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.section-part3 {\r\n\tpadding-top: 50px; \r\n}\r\n\r\n.section-part6 {\r\n\twidth: auto;\r\n\tdisplay: flex;\r\n\tflex-direction: column-reverse;\r\n\t\tposition: relative;\r\n}\r\n\r\n.img-part6 {\r\n\twidth: 70%;\r\n\theight: 40%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: static;\r\n\tz-index: -1;\r\n}\r\n\r\n.blockpart6-card {\r\n\twidth: 60%;\r\n\theight: 45%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tz-index: 1000;\r\n\ttop: 0%;\r\n\tleft: 0;\r\n}\r\n\r\n.blockpart6-text--uppercase {\r\n\tdisplay: none;\r\n}\r\n\r\n.blockpart6-information__bookmark {\r\n\tbottom: -15%;\r\n\tright: 25%;\r\n}\r\n\r\n.blockpart6-information__text:after {\r\n\tcontent: \"\\A0\\A0\\A0\";\r\n\twidth: 10%;\r\n\tborder-top: none; \r\n}\r\n\r\n.blockpart6-information__text {\r\n\twidth: 90%;\r\n\tmargin: 0;\r\n\tposition: static;\r\n\ttext-align: left;\r\n}\r\n}\r\n\r\n@media (max-width: 900px) {\r\n.block-background__content {\r\n\ttop: 70px;\r\n\t}\r\n}\r\n\r\n@media (max-width: 800px) {\r\n\t.section-part1 {\r\n\t\tposition: relative;\r\n\t\tmargin: 0;\r\n\t}\r\n\r\n\r\n\t.section-part7 {\r\n\t\tmargin-top: 100px;\r\n\t}\r\n\r\n\t.block-background {\r\n\r\n\tposition: relative;\r\n\twidth: auto;\r\n}\r\n\r\n.block-sorting {\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n\t.block-background__content {\r\n\tposition: absolute;\r\n\ttop: 60px;\r\n\tmargin-left: 80px;\r\n\theight: auto;\r\n}\r\n\r\n.block-image__article,\r\n.block-image__header,\r\n.block-date {\r\n\tpadding-bottom: 10px;\r\n}\r\n\r\n.block-cards {\r\n\tdisplay: flex;\r\n\twidth: 80%;\r\n\tjustify-content: center;\r\n\tflex-wrap: wrap;\r\n    margin-left: 10%;\r\n}\r\n\r\n.block-cards__card1 {\r\n   width: 100%;\r\n   height:100%;\r\n\tposition: relative;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\n.block-cards__card2 {\r\n   width: 100%;\r\n   height:100%;\r\n\tposition: relative;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\n.block-cards__card3 {\r\n   width: 100%;\r\n   height:100%;\r\n\tposition: relative;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n\r\n.img-part2 {\r\n\twidth: 80%;\r\n\theight: 60%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: static;\r\n\tz-index: -1;\r\n}\r\n\r\n.block-card {\r\n\twidth: 70%;\r\n\theight: auto;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tz-index: 1000;\r\n\ttop: 0%;\r\n\tleft: 0;\r\n\tposition: relative;\r\n}\r\n\r\n.block-information__bookmark,\r\n.blockpart6-information__bookmark {\r\n\tbottom: -5%;\r\n\tright: 25%;\r\n}\r\n\r\n.section-part6 {\r\n\tmargin:50px 5% 0 5%;\r\n\twidth: 85%;\r\n}\r\n.img-part6 {\r\n\twidth: 100%;\r\n\theight: 60%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: static;\r\n\tz-index: -1;\r\n}\r\n\r\n.blockpart4-information__text {\r\n\tfont-size: 2rem;\r\n}\r\n\r\n.blockpart6-card {\r\n\twidth: 80%;\r\n\theight: auto;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tz-index: 1000;\r\n\ttop: 0%;\r\n\tleft: 0;\r\n\tposition: relative;\r\n}\r\n\r\n.navbar {\r\n\tdisplay: none;\r\n}\r\n.footer {\r\ndisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.footer__email {\r\n\tdisplay: flex;\r\n\tflex-direction:column;\r\n\twidth: 80%;\r\n\tmargin: 0 auto;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.input {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n\r\n\r\n.footer__social {\r\n\tdisplay: flex;\r\n\tflex-direction:column;\r\n\twidth: 80%;\r\n\tmargin: 20px auto;\r\n\tjustify-content: center;\r\n}\r\n\r\n.footer__about {\r\n\tdisplay: flex;\r\n\tflex-direction:column;\r\n\twidth: 80%;\r\n\tmargin: 20px auto;\r\n\tjustify-content: center;\r\n}\r\n}\r\n\r\n@media (max-width: 700px) {\r\n   .block-background{\r\n\tposition: relative;\r\n\twidth: auto;\r\n}\r\n\r\n\t.block-background__content {\r\n\tposition: absolute;\r\n\ttop: 30px;\r\n\tmargin-left: 60px;\r\n\theight: auto;\r\n}\r\n\r\n.block-part4__information {\r\n\theight: 65%;\r\n\twidth: 70%;\r\n}\r\n\r\n.block-sorting span,\r\n.block-sorting .sort-popular,\r\n.block-sorting .sort-new{\r\n\tfont-size: 1.6rem;\r\n}\r\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./modalIcon.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./modalIcon.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "/*styles for Modal Icon*/\r\n\r\n.closeBtn1,\r\n.closeBtn2,\r\n.closeBtn3,\r\n.closeBtn4 {\r\nposition: absolute;\r\ncursor: pointer;\r\npadding: 0;\r\ntop: -10px;\r\nright: -10px;\r\nwidth: 22px;\r\nheight: 22px;\r\nborder: 2px solid #ccc;\r\n-webkit-border-radius: 50%;\r\n-moz-border-radius: 50%;\r\n-ms-border-radius: 50%;\r\n-o-border-radius: 50%;\r\nborder-radius: 50%;\r\nbackground-color: rgba(61, 61, 61, 0.8);\r\n-webkit-box-shadow: 0px 0px 10px #000;\r\n-moz-box-shadow: 0px 0px 10px #000;\r\nbox-shadow: 0px 0px 10px #000;\r\ntext-align: center;\r\ntext-decoration: none;\r\nfont-weight: bold;\r\nline-height: 20px;\r\n-webkit-transition: all ease .8s;\r\n-moz-transition: all ease .8s;\r\n-ms-transition: all ease .8s;\r\n -o-transition: all ease .8s;\r\n transition: all ease .8s;\r\n}\r\n\r\n.closeBtn1:before,\r\n.closeBtn2:before,\r\n.closeBtn3:before,\r\n.closeBtn4:before  {\r\ncolor: rgba(255, 255, 255, 0.9);\r\ncontent: '\\2715';\r\ntext-shadow: 0 -1px rgba(0, 0, 0, 0.9);\r\nfont-size: 16px;\r\n}\r\n\r\n.closeBtn1:hover,\r\n.closeBtn2:hover,\r\n.closeBtn3:hover,\r\n.closeBtn4:hover {\r\nbackground-color: #C8CCC9;\r\nborder-color: #000000;\r\ncolor: #000000;\r\n-webkit-transform: rotate(180deg);\r\n-moz-transform: rotate(180deg);\r\n-ms-transform: rotate(180deg);\r\n-o-transform: rotate(180deg);\r\ntransform: rotate(180deg);\r\n}\r\n\r\n.modal1,\r\n.modal2,\r\n.modal3,\r\n.modal4 {\r\n    background: rgba(0,0,0, 0.7);\r\n    display: none;\r\n    justify-content: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    position: fixed;\r\n    right: 0;\r\n    height: auto;\r\n    perspective: 500px;\r\n    z-index: 999999;\r\n\r\n    \r\n}\r\n\r\n.modal1 .modal-wrapper1,\r\n.modal2 .modal-wrapper2,\r\n.modal3 .modal-wrapper3,\r\n.modal4 .modal-wrapper4 {\r\n    width: 75%;\r\n    top: 10%;\r\n    background: #FBBC16;\r\n    position: absolute;\r\n    text-align: left;\r\n    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.1);\r\n    animation-name:modalopen;\r\n    animation-duration: 1s;\r\n    transform: rotateX(0deg);\r\n    z-index: 999999;\r\n    padding: 15px 0 35px 0;\r\n    border-radius: 15px;\r\n}\r\n\r\n.modal-header1, .modal-body1,\r\n.modal-header2, .modal-body2,\r\n.modal-header3, .modal-body3,\r\n.modal-header4, .modal-body4 {\r\n    padding: 5px 15px;\r\n}\r\n\r\n.modal-header1 h3,\r\n.modal-header2 h3,\r\n.modal-header3 h3,\r\n.modal-header4 h3 {\r\n    text-align: center;\r\n    color: #000000;\r\n    font-family: ProximaNova-Semibold;\r\n    font-size: 24px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.modal-body1,\r\n.modal-body2,\r\n.modal-body3,\r\n.modal-body4  {\r\n    background: white;\r\n}\r\n\r\n.modal-body1 p,\r\n.modal-body2 p,\r\n.modal-body3 p,\r\n.modal-body4 p {\r\n    color: #000000;\r\n    font-family: ProximaNova-Semibold;\r\n    font-size: 16px;\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.block__image {\r\n    display: flex;\r\n   justify-content: center;\r\n   width: 100%;\r\n   margin: 15px 0;\r\n}\r\n\r\n.modalImage {\r\n    position: relative;\r\n    width: 60%;\r\n    border-radius: 10px;\r\n}\r\n\r\n@keyframes modalopen{\r\n  from {\r\n    opacity: 0; \r\n    top: -20%;\r\n    transform: rotateX(15deg);\r\n   }\r\n  to {\r\n    opacity: 1; \r\n    top: 10%; \r\n    transform: rotateX(0deg);\r\n    }\r\n}\r\n\r\n/*styles for search*/\r\n\r\n.search__text {\r\n    font-family: ProximaNova-Semibold;\r\n    font-size: 2.4rem;\r\n    text-align: center;margin-bottom: 30px;\r\n}\r\n\r\n.block__search {\r\n    position: relative;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#search,\r\n#searchMobile {\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  display: block;\r\n  width: 300px;\r\n  border: none;\r\n  border-bottom: 1px solid #3B3B3B;\r\n}\r\n\r\n#search:focus,\r\n#searchMobile:focus {\r\n  outline: none;\r\n}\r\n\r\nlabel[for=\"search\"],\r\nlabel[for=\"searchMobile\"] {\r\n    font-family: ProximaNova-Semibold;\r\n    font-size: 2rem;\r\n  color: #3B3B3B;\r\n  font-size: 18px;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  left: 10px;\r\n  top: 15px;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n\r\n#search:focus ~ label[for=\"search\"],\r\n#searchMobile:focus ~ label[for=\"searchMobile\"] {\r\n  top: -15px;\r\n  font-size: 14px;\r\n  color: #5264AE;\r\n}\r\n\r\n.bar {\r\n  position: relative;\r\n  display: block;\r\n  width: 320px;\r\n}\r\n.bar:before, .bar:after {\r\n  content: \"\";\r\n  height: 2px;\r\n  width: 0;\r\n  bottom: 0;\r\n  position: absolute;\r\n  background: #5264AE;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n.bar:before {\r\n  left: 50%;\r\n}\r\n.bar:after {\r\n  right: 50%;\r\n}\r\n\r\n#search:focus ~ .bar:before,\r\n#search:focus ~ .bar:after,\r\n#searchMobile:focus ~ .bar:before,\r\n#searchMobile:focus ~ .bar:after {\r\n  width: 50%;\r\n}\r\n\r\n.search__result {\r\n    background-color: #FBBC16;\r\n    padding: 10px 25px;\r\n    color: #000000;\r\n    font-family: ProximaNova-Extrabld;\r\n    font-size: 1.6rem; \r\n    border-radius: 20px;\r\n    margin-right: 30px;\r\n    border: 2px solid #FFFFFF;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.search__result:hover {\r\n    background-color: #FFFFFF;\r\n    border: 2px solid #FBBC16;\r\n}\r\n\r\n.search__result:focus {\r\n    outline:none;\r\n}\r\n\r\n.overlay {\r\ntop: 0;\r\nright: 0;\r\nbottom: 0;\r\nleft: 0;\r\nz-index: 9999;\r\nvisibility: hidden;\r\nbackground-color: rgba(0, 0, 0, 0.7);\r\nopacity: 0;\r\nposition: fixed; \r\ncursor: default; \r\n}\r\n\r\n.overlay:target {\r\nvisibility: visible;\r\nopacity: 1;\r\n-webkit-transition: all 0.6s;\r\n-moz-transition: all 0.6s;\r\n-ms-transition: all 0.6s;\r\n-o-transition: all 0.6s;\r\ntransition: all 0.6s;\r\n}\r\n\r\n\r\n.popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\ntop: 0;\r\nright: 0;\r\nleft: 50%;\r\nfont-size: 14px;\r\nz-index: 10000;\r\nmargin: 0 auto;\r\nwidth: 100%;\r\nmin-width: 320px;\r\nmax-width: 820px;\r\nposition: fixed;\r\npadding: 30px;\r\nborder: 1px solid #383838;\r\n-webkit-border-radius: 10px;\r\n-moz-border-radius: 10px;\r\n-ms-border-radius: 10px;\r\nborder-radius: 10px;\r\nbackground-color: #FFFFFF;\r\n-webkit-box-shadow: 0 15px 20px rgba(0,0,0,.22),0 19px 60px rgba(0,0,0,.3);\r\n-moz-box-shadow: 0 15px 20px rgba(0,0,0,.22),0 19px 60px rgba(0,0,0,.3);\r\n-ms-box-shadow: 0 15px 20px rgba(0,0,0,.22),0 19px 60px rgba(0,0,0,.3);\r\n-o-box-shadow: 0 15px 20px rgba(0,0,0,.22),0 19px 60px rgba(0,0,0,.3);\r\nbox-shadow: 0 15px 20px rgba(0,0,0,.22),0 19px 60px rgba(0,0,0,.3);\r\n-webkit-transform: translate(-50%, -150%);\r\n-ms-transform: translate(-50%, -150%);\r\n-o-transform: translate(-50%, -150%);\r\ntransform: translate(-50%, -150%);\r\n}\r\n.overlay:target + .popup {\r\ntop: 50%;\r\n-webkit-transform: translate(-50%,-50%);\r\n-ms-transform: translate(-50%, -50%);\r\n-o-transform: translate(-50%, -50%);\r\ntransform: translate(-50%, -50%);\r\n-webkit-transition: transform 0.6s ease-out;\r\n-moz-transition: transform 0.6s ease-out;\r\n-ms-transition: transform 0.6s ease-out;\r\n-o-transition: transform 0.6s ease-out;\r\ntransition: transform 0.6s ease-out;\r\n}\r\n\r\n.close {\r\nposition: absolute;\r\npadding: 0;\r\ntop: -10px;\r\nright: -10px;\r\nwidth: 22px;\r\nheight: 22px;\r\nborder: 2px solid #ccc;\r\n-webkit-border-radius: 50%;\r\n-moz-border-radius: 50%;\r\n-ms-border-radius: 50%;\r\n-o-border-radius: 50%;\r\nborder-radius: 50%;\r\nbackground-color: rgba(61, 61, 61, 0.8);\r\n-webkit-box-shadow: 0px 0px 10px #000;\r\n-moz-box-shadow: 0px 0px 10px #000;\r\nbox-shadow: 0px 0px 10px #000;\r\ntext-align: center;\r\ntext-decoration: none;\r\nfont-weight: bold;\r\nline-height: 20px;\r\n-webkit-transition: all ease .8s;\r\n-moz-transition: all ease .8s;\r\n-ms-transition: all ease .8s;\r\n -o-transition: all ease .8s;\r\n transition: all ease .8s;\r\n}\r\n.close:before {\r\ncolor: rgba(255, 255, 255, 0.9);\r\ncontent: '\\2715';\r\ntext-shadow: 0 -1px rgba(0, 0, 0, 0.9);\r\nfont-size: 16px;\r\n}\r\n.close:hover {\r\nbackground-color: #C8CCC9;\r\nborder-color: #000000;\r\ncolor: #000000;\r\n-webkit-transform: rotate(180deg);\r\n-moz-transform: rotate(180deg);\r\n-ms-transform: rotate(180deg);\r\n-o-transform: rotate(180deg);\r\ntransform: rotate(180deg);\r\n}\r\n.popup h1 {\r\nwidth: 80%;\r\nfont-size: 24px;\r\n}\r\n\r\n \r\n@media only screen and (min-width: 768px) and (max-width: 959px) {\r\n  .popup {\r\n    width: 95%;\r\n  }\r\n}\r\n \r\n@media only screen and (min-width: 320px) and (max-width: 767px) {\r\n  .popup {\r\n    width:55%;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./fonts.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./fonts.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(10);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "@font-face{\r\nfont-family: Lora-Bold;\r\nsrc: url(" + escape(__webpack_require__(11)) + ") format(\"truetype\");\r\n}\r\n\r\n@font-face{\r\nfont-family: Lora-BoldItalic;\r\nsrc: url(" + escape(__webpack_require__(12)) + ") format(\"truetype\");\r\n}\r\n\r\n@font-face{\r\nfont-family: Lora-Regular;\r\nsrc: url(" + escape(__webpack_require__(13)) + ") format(\"truetype\");\r\n}\r\n\r\n@font-face{\r\nfont-family: ProximaNova-Extrabld;\r\nsrc: url(" + escape(__webpack_require__(14)) + ") format(\"truetype\");\r\n}\r\n\r\n@font-face{\r\nfont-family: ProximaNova-Regular;\r\nsrc: url(" + escape(__webpack_require__(15)) + ") format(\"truetype\");\r\n}\r\n\r\n@font-face{\r\nfont-family: ProximaNova-Semibold;\r\nsrc: url(" + escape(__webpack_require__(16)) + ") format(\"truetype\");\r\n}\r\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "21ed2e3dec3ff37812afbfc186227f46.ttf";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c9bbeab677dd05fab33c525448766f7.ttf";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9d79d984e265cbfb4dc0f3dbf0f269d0.ttf";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "51563919fd1af7376fac14b1194a8e4e.ttf";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7ce6760d17685c466ba04d1b2c63c38b.ttf";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df8c626474a73ab7a8b511655597c7c4.ttf";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// sort by popular
function sortablepopular(cls, attr) {

    var elementspopular = document.querySelectorAll(cls),
        length = elementspopular.length,
        parentelement = document.querySelector('.main-content'),
        arrayElements = [];

    for (var i = 0; i < length; i++) {
        arrayElements.push({
            dataAttr: elementspopular[i].getAttribute(attr),
            el: elementspopular[i]
        });
    }

    arrayElements.sort(function (a, b) {
        return parseInt(a.dataAttr) > parseInt(b.dataAttr) ? 1 : -1;
    });

    for (var j = 0; j < length; j++) {
        parentelement.appendChild(arrayElements[j].el);
        parentelement.style.width = "40%";
        parentelement.style.margin = "0 auto";
        if (window.matchMedia("(max-width: 900px)").matches) {
            parentelement.style.width = "80%";
            parentelement.style.margin = "0 auto";
            var cards = document.querySelector('.block-cards');
            cards.style.display = "none";
        }
    }
    console.log("Correct work");
}

//sort by new 
function sortablenew(cls, attr) {

    var elements = document.querySelectorAll(cls),
        len = elements.length,
        parent = document.querySelector('.main-content'),
        arrElements = [];

    for (var i = 0; i < len; i++) {
        arrElements.push({
            dataAttr: elements[i].getAttribute(attr),
            el: elements[i]
        });
    }

    arrElements.sort(function (a, b) {
        return parseInt(a.dataAttr) > parseInt(b.dataAttr) ? 1 : -1;
    });

    for (var j = 0; j < len; j++) {
        parent.appendChild(arrElements[j].el);
        parent.style.width = "40%";
        parent.style.margin = "0 auto";
        if (window.matchMedia("(max-width: 900px)").matches) {
            parent.style.width = "80%";
            parent.style.margin = "0 auto";
        }
    }
    console.log("Correct work");
}

//styles for blocks
function hidden1() {
    var pict1 = document.getElementById('image_none1');
    var subblocks1 = document.querySelector('.block-card');
    var blockmargin1 = document.querySelector('.section-part2');
    blockmargin1.style.height = "350px";
    subblocks1.style.width = "100%";
    subblocks1.style.height = "100%";
    subblocks1.style.right = "0";
    subblocks1.style.top = "0";
    pict1.style.display = 'none';
    var pict2 = document.getElementById('image_none2');
    var subblocks2 = document.querySelector('.blockpart6-card');
    var blockmargin2 = document.querySelector('.section-part6');
    subblocks2.style.width = "100%";
    subblocks2.style.height = "100%";
    subblocks2.style.left = "0";
    subblocks2.style.top = "0";
    blockmargin2.style.margin = "0";
    blockmargin2.style.height = "350px";
    pict2.style.display = 'none';
    var alignblocks = document.querySelectorAll('.blocks');
    var len = alignblocks.length;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = alignblocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var block = _step.value;

            block.style.marginBottom = "50px";
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var element = document.querySelector(".blockpart6-information__bookmark");
    var bookmark = document.querySelector(".block-information__bookmark");
    bookmark.style.display = "none";
    element.style.left = "90%";
    element.style.bottom = "-5%";
    var modificator = document.querySelector(".block__modificator");
    var mod = document.querySelector(".blockpart4-information__text");
    mod.style.fontSize = "2rem";
    modificator.style.marginTop = "0";
    modificator.style.marginLeft = "0";
    modificator.style.marginRight = "0";
    modificator.style.width = "100%";
    var blocksformat1 = document.querySelectorAll(".block-cards__card1");
    var blocksformat2 = document.querySelectorAll(".block-cards__card2");
    var blocksformat3 = document.querySelectorAll(".block-cards__card3");
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = blocksformat1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var block = _step2.value;

            block.style.width = "100%";
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = blocksformat2[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var block = _step3.value;

            block.style.width = "100%";
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = blocksformat3[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var block = _step4.value;

            block.style.width = "100%";
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
}

exports.sortablepopular = sortablepopular;
exports.sortablenew = sortablenew;
exports.hidden1 = hidden1;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function scroll() {
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -20);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  document.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
}
exports.scroll = scroll;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function animationMenu() {
    var nav = document.querySelector(".navbar");
    var widthOpen = 30 + "%";
    nav.style.width = widthOpen;
    console.log("ok");
    nav.style.transition = "width 0.5s";
}

function animationMobile() {
    if (window.matchMedia("(max-width: 992px)").matches) {
        var navMobile = document.querySelector(".navbar");
        var widthMobile = 100 + "%";
        navMobile.style.width = widthMobile;
        navMobile.style.transition = "width 0.5s";
    }
}

function closeMobile() {
    if (window.matchMedia("(max-width: 992px)").matches) {
        var navMobile = document.querySelector(".navbar");
        var widthClose = 5 + "%";
        navMobile.style.transition = "width 0.3s";
        navMobile.style.width = widthClose;
    }
}

function closeMenu() {
    var nav = document.querySelector(".navbar");
    var widthClose = 5 + "%";
    nav.style.width = widthClose;
    console.log("ok");
    nav.style.transition = "width 0.3s";
}

exports.animationMenu = animationMenu;
exports.closeMenu = closeMenu;
exports.animationMobile = animationMobile;
exports.closeMobile = closeMobile;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function modalWin() {
    var btn1 = document.querySelector('.block-button__reader1'),
        btn2 = document.querySelector('.block-button__reader2'),
        btn3 = document.querySelector('.block-button__reader3'),
        btn4 = document.querySelector('.block-button__reader4'),
        modal1 = document.querySelector('.modal1'),
        modal2 = document.querySelector('.modal2'),
        modal3 = document.querySelector('.modal3'),
        modal4 = document.querySelector('.modal4'),
        closeBtn1 = document.querySelector('.closeBtn1'),
        closeBtn2 = document.querySelector('.closeBtn2'),
        closeBtn3 = document.querySelector('.closeBtn3'),
        closeBtn4 = document.querySelector('.closeBtn4');
    btn1.addEventListener('click', function () {
        modal1.style.display = 'flex';
    });
    btn2.addEventListener('click', function () {
        modal2.style.display = 'flex';
    });

    btn3.addEventListener('click', function () {
        modal3.style.display = 'flex';
    });

    btn4.addEventListener('click', function () {
        modal4.style.display = 'flex';
    });

    closeBtn1.addEventListener('click', function () {
        modal1.style.display = "none";
    });

    closeBtn2.addEventListener('click', function () {
        modal2.style.display = "none";
    });

    closeBtn3.addEventListener('click', function () {
        modal3.style.display = "none";
    });

    closeBtn4.addEventListener('click', function () {
        modal4.style.display = "none";
    });
}

exports.modalWin = modalWin;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function tabsTeen() {
    var content = document.querySelectorAll(".all");
    var child = document.querySelectorAll(".childs");
    var teen = document.querySelectorAll(".teens");
    var menu = document.querySelector(".for_all-menu");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = content[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var block = _step.value;

            block.style.display = "none";
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var element = document.querySelector(".teenSide");
    switch (element.textContent) {
        case "Teen Side":
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = content[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _block = _step2.value;

                    _block.style.display = "none";
                    _block.style.marginTop = "30px";
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = teen[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _block2 = _step3.value;

                    _block2.style.display = "block";
                    _block2.style.marginTop = "30px";
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = child[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _block3 = _step4.value;

                    _block3.style.display = "none";
                    _block3.style.marginTop = "30px";
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            menu.innerHTML = "Teen Side&nbsp;&nbsp;&nbsp;<i class='fa fa-chevron-down' aria-hidden='true'></i>";
            break;
    }
}
function tabsKids() {
    var content = document.querySelectorAll(".all");
    var child = document.querySelectorAll(".childs");
    var teen = document.querySelectorAll(".teens");
    var element = document.querySelector(".babySide");
    var menu = document.querySelector(".for_all-menu");
    switch (element.textContent) {
        case "Baby Side":
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = content[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var block = _step5.value;

                    block.style.display = "none";
                    block.style.marginTop = "30px";
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = teen[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _block4 = _step6.value;

                    _block4.style.display = "none";
                    _block4.style.marginTop = "30px";
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = child[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var _block5 = _step7.value;

                    _block5.style.display = "block";
                    _block5.style.marginTop = "30px";
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            menu.innerHTML = "Baby Side&nbsp;&nbsp;&nbsp;<i class='fa fa-chevron-down' aria-hidden='true'></i>";
            break;

    }
}
function tabsAll() {
    var content = document.querySelectorAll(".all");
    var child = document.querySelectorAll(".childs");
    var teen = document.querySelectorAll(".teens");
    var element = document.querySelector(".allSide");
    var menu = document.querySelector(".for_all-menu");
    switch (element.textContent) {
        case "Для усіх":
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = content[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var block = _step8.value;

                    block.style.display = "block";
                    block.style.marginTop = "30px";
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = teen[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var _block6 = _step9.value;

                    _block6.style.display = "block";
                    _block6.style.marginTop = "30px";
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = child[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var _block7 = _step10.value;

                    _block7.style.display = "block";
                    _block7.style.marginTop = "30px";
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }

            menu.innerHTML = "Для усіх&nbsp;&nbsp;&nbsp;<i class='fa fa-chevron-down' aria-hidden='true'></i>";
            break;

    }
}

exports.tabsTeen = tabsTeen;
exports.tabsKids = tabsKids;
exports.tabsAll = tabsAll;

/***/ })
/******/ ]);