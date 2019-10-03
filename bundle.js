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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _sorting = __webpack_require__(6);

var sort = document.getElementById("lol");

sort.addEventListener("click", function () {
  return (0, _sorting.sortable)(".blocks", "data-views");
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-size: 10px;\r\n}\r\n\r\n/*header start*/\r\nheader {\r\n\tposition: relative;\r\n\tz-index: 99999;\r\n\tborder-bottom: 1px solid lightgrey;\r\n}\r\n\r\n.left_header {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\r\n}\r\n\r\n.logo {\r\n\twidth: 10%;\r\n\theight: 20%;\r\n\tposition: relative;\r\n}\r\n\r\n.logo-img {\r\n\twidth: auto;\r\n\tpadding: 20px;\r\n\tborder-right: 2px solid lightgrey;\r\n}\r\n\r\n.for_all { \r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin-left: 30px;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n.for_all-menu {\r\n\tbackground-color: #FBBC16;\r\n\ttext-decoration: none;\r\n\tcolor: #000000;\r\n\tfont-family: ProximaNova-Semibold;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.8rem;\r\n\tpadding: 5px 15px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.for_all-menu:hover ~ #sub_menu {\r\n\tdisplay: flex;\r\n\twidth: 200px;\r\n}\r\n\r\n.right-menu {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n}\r\n\r\n.right-menu__list {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tlist-style-type: none;\r\n\tpadding: 20px;\r\n\tborder-right: 2px solid lightgrey;\r\n}\r\n\r\n.right-menu__list .right-menu__list--item a {\r\n\tfont-size: 1.4rem;\r\n\tfont-family: Lora-Regular;\r\n\tfont-weight: bold;\r\n\ttext-decoration: none;\r\n\tpadding: 10px;\r\n\tcolor: #000000;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.magnifier,\r\n.bookmark {\r\n\tborder:none;\r\n\tpadding: 20px;\r\n}\r\n\r\n.menu-mobile {\r\n\tdisplay: none;\r\n}\r\n\r\n.section-part1 {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n\r\n.navbar {\r\n\theight: 100vh;\r\n\ttop: 0;\r\n\twidth: 5%;\r\n\tposition: fixed;\r\n\tbackground-color: #FFFFFF;\r\n\tz-index: 999; \r\n\tpadding-top: 60px;\r\n}\r\n\r\n.navigation-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n.navigation-menu__item-uppercase {\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#nav-toggle:checked ~ .section-part1 .navbar .nav-menu .navigation-menu {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tflex-direction: column;\r\n\r\n}\r\n\r\n.nav-menu {\r\n\tdisplay: flex;\r\nflex-direction: row;\r\njustify-content: space-between;\r\nwidth: 100%;\r\n}\r\n\r\n.nav-menu label {\r\n\tmargin-top: 60px;\r\n\tfont-size: 2.2rem;\r\n\tpadding-top: 20px;\r\n\tpadding-left: 20px;\r\n\tfont-family: ProximaNova-Semibold;\r\n}\r\n\r\nlabel[for=\"close\"] {\r\n\tcursor: pointer;\r\n}\r\n\r\n.nav-menu .navigation-menu {\r\n\tpadding: 0 0px 0 20%;\r\n\talign-self: center;\r\n\twidth: 100%;\r\n}\r\n\r\n\r\n.nav-menu .navigation-menu a {\r\n\ttext-align: left;\r\n}\r\n\r\n.nav-menu .navigation-menu a:before {\r\n\tcontent: \" \";\r\n\twidth: 30px;\r\n\theight: 3px;\r\n\tbackground: #FBBC16;\r\n\tdisplay: block;\r\n\topacity: 0;\r\n\tmargin: 0 0 -10px -50px;\r\n}\r\n\r\n.nav-menu .navigation-menu a:hover:before {\r\n\topacity: 1;\r\n}\r\n\r\n.section-part1 .navbar .nav-menu label {\r\n\tdisplay: none;\r\n}\r\n\r\n#nav-toggle:checked ~ .section-part1 .navbar .nav-menu label {\r\n\tdisplay: block;\r\n}\r\n\r\n#nav-toggle:checked ~ .section-part1 .navbar  label .burger__img {\r\n\tdisplay: none;\r\n}\r\n\r\n#nav-toggle:checked ~ .section-part1 .navbar {\r\n\twidth: 35%;\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\nz-index: 999;\r\n}\r\n\r\n\r\n\r\n\r\n#close:checked ~ .section-part1 .navbar .nav-menu {\r\n\tdisplay: none;\r\n}\r\n\r\n#close:checked ~ .section-part1 .navbar {\r\n\twidth: 5%;\r\n}\r\n\r\n#close:checked ~ .section-part1 .navbar  label .burger__img {\r\n\tdisplay: block;\r\n}\r\n\r\n.navigation-menu {\r\n\tlist-style-type: none;\r\n}\r\n\r\n.navigation-menu__item {\r\n\tpadding-bottom: 30px;\r\n} \r\n\r\n.navbar .nav-menu label {\r\n\tposition: relative;\r\n\ttop: -50px;\r\n}\r\n\r\n\r\n.navigation-menu__item a{\r\n\tfont-family: ProximaNova-Semibold;\r\n\tfont-size: 1.8rem;\r\n\tcolor: #000000;\r\n} \r\n\r\n.navbar a {\r\n\ttext-decoration: none;\r\n}\r\n\r\nlabel[for=\"nav-toggle\"] {\r\n\tcursor: pointer;\r\n}\r\n\r\n.burger__img {\r\n\tdisplay: block;\r\n\tpadding: 20px;\r\n}\r\n/*header end*/\r\n/*content start*/\r\n.block-background{\r\n\theight: 80vh;\r\n\tposition: relative;\r\n\twidth: auto;\r\n}\r\n\r\n.block-background__image {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tz-index: -1;\r\n\tposition: relative;\r\n}\r\n\r\n.block-background__content {\r\n\tposition: absolute;\r\n\ttop: 150px;\r\n\tmargin-left: 100px;\r\n\theight: auto;\r\n}\r\n\r\n.block-image {\r\n\twidth: 95%;\r\n\theight: auto;\r\n\tmargin-left: 5%;\r\n\tposition: relative;\r\n}\r\n\r\n\r\n.block-image__article {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.8rem;\r\n\tcolor: #FBBC16;\r\n\tfont-weight: bold;\r\n\tpadding-bottom: 3rem;\r\n}\r\n\r\n.block-image__header {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 3.2rem;\r\n\twidth: 80%;\r\n\tcolor: #FFFFFF;\r\n\tfont-weight: bold;\r\n\tpadding-bottom: 3rem;\r\n}\r\n\r\n.block-date  {\r\n\twidth: 40%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\tpadding-bottom: 3rem;\r\n}\r\n\r\n.block-calendar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.block-view {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.block-date img {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n}\r\n\r\n.block-date span {\r\n\tdisplay: inline-block;\r\n\tmargin: 0px 15px;\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.6rem;\r\n\tcolor: #FFFFFF;\r\n}\r\n\r\n.block-image__article--uppercase {\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.block-button {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: 15%;\r\n\tpadding-bottom: 3rem;\r\n}\r\n\r\n.block-button__reader {\r\n\ttext-decoration: none;\r\n\tbackground-color: #FBBC16;\r\n\tpadding: 10px 25px;\r\n\tcolor: #000000;\r\n\tfont-family: ProximaNova-Extrabld;\r\n\tfont-size: 1.6rem; \r\n\tborder-radius: 20px;\r\n\tmargin-right: 30px;\r\n}\r\n\r\n.block-sorting {\r\n\tmargin-left: 10%;\r\n\tmargin-top: 50px; \r\n}\r\n\r\n.block-sorting span {\r\n\tfont-family: ProximaNova-Semibold;\r\n\tfont-size: 2rem;\r\n\tcolor: lightgrey;\r\n\tpadding-right: 10px;\r\n\tpadding-left: 10px;\r\n}\r\n.block-sorting a {\r\n\ttext-decoration: none;\r\n\tfont-family: ProximaNova-Semibold;\r\n\tfont-size: 2rem;\r\n\tcolor: lightgrey;\r\n\tpadding-right: 10px;\r\n\tpadding-left: 10px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.block-sorting .sort-popular {\r\n\tborder-right: 2px solid lightgrey;\r\n}\r\n\r\n.section-part2 {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tposition: relative;\r\n}\r\n\r\n.img-part2 {\r\n\twidth: 45%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: absolute;\r\n\tleft: 10%;\r\n\tz-index: -1;\r\n}\r\n\r\n.block-card {\r\n\twidth: 30%;\r\n\theight: 45%;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tposition: absolute;\r\n\ttop: 35%;\r\n\tright: 18%;\r\n\tz-index: 1000;\r\n}\r\n\r\n\r\n.block-information {\r\n\tborder:1px solid #000000;\r\n\theight: 90%;\r\n\tbackground-color: #FFFFFF;\r\n\tpadding-left: 30px; \r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.block-text--uppercase {\r\n\ttext-transform: uppercase;\r\n\tcolor: #FBBC16;\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.6rem;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.block-information__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 2.6rem;\r\n\tcolor: #716E6E;\r\n\twidth: 90%;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.block-information__text:before {\r\n\tcontent: \"\\A0\\A0\\A0\";\r\n\twidth: 10%;\r\n\tborder-top: 3px solid red;\r\n\tposition: absolute;\r\n\tleft: -5%;\r\n}\r\n\r\n.block-information__content {\r\n\tpadding: 20px 0;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tposition: relative;\r\n}\r\n\r\n\r\n\r\n.block-information__date {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n.block-information__date img,\r\n.block-information__date span,\r\n.block-information__view img,\r\n.block-information__view span {\r\n\tpadding: 0 5px;\r\n}\r\n\r\n.block-information__view {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tmargin-left: 60px;\r\n}\r\n\r\n.block-information__date span {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.4rem;\r\n}\r\n\r\n.block-information__view span {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.4rem;\r\n}\r\n\r\n.button-read {\r\n\tpadding-top: 20px;\r\n\tposition: relative;\r\n\tbottom: 1rem;\r\n}\r\n\r\n.block-information__bookmark {\r\n\tposition: absolute;\r\n\tbottom: -5%;\r\n\tright: 5%;\r\n}\r\n\r\n\r\n.block-cards {\r\n\tdisplay: grid;\r\n\twidth: 80%;\r\n\tgrid-template-columns: [col1start] 1fr [col1end] 5% \r\n                           [col2start] 1fr [col2end] 5%\r\n                            [col3start] 1fr [col3end];\r\n    grid-template-rows: [row1start] 1fr [row1end];\r\n    margin-left: 10%;\r\n}\r\n\r\n.block-cards__card1 {\r\n\t grid-column: col1start / col1end;\r\n   grid-row: row1start;\r\n   width: 100%;\r\n   height:100%;\r\n\tposition: relative;\r\n}\r\n\r\n.block-cards__card2 {\r\n\t grid-column: col2start / col2end;\r\n   grid-row: row1start;\r\n   width: 100%;\r\n   height:100%;\r\n\tposition: relative;\r\n}\r\n\r\n.block-cards__card3 {\r\n\t grid-column: col3start / col3end;\r\n   grid-row: row1start;\r\n   width: 100%;\r\n   height:100%;\r\n\tposition: relative;\r\n}\r\n\r\n.card1__text {\r\n\tfont-family: Lore_Regular;\r\n\tfont-size: 1.8rem;\r\n\tcolor: #FBBC16;\r\n\tpadding-bottom: 20px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.card1__image {\r\n\twidth: 100%;\r\n}\r\n\r\n.block-card1__information {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\twidth: 70%;\r\n\r\n}\r\n\r\n.calendar__date,\r\n.view {\r\n\tfont-family: Lore_Regular;\r\n\tfont-size: 1.6rem;\r\n}\r\n\r\n.block-card__image {\r\n\tposition: relative;\r\n}\r\n\r\n.card1__bookmark {\r\n\tposition: absolute;\r\n\tright: 5%;\r\n\tbottom: -5%;\r\n}\r\n\r\n.cards-calendar,\r\n.cards-view {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin: 10px 0;\r\n\t\r\n\r\n}\r\n\r\n.cards-calendar img,\r\n.cards-view img{\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.cards__maintext {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.8rem;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.section-part4 {\r\n\twidth: 80%;\r\n\tmargin-left: 10%;\r\n\tmargin-top: 5%;\r\n}\r\n\r\n.block-part4 {\r\n\tbackground-size: cover;\r\n\theight: 430px;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: relative;\r\n}\r\n\r\n.block-part4__image {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.section-part4__header {\r\n\ttext-transform: uppercase;\r\n\tcolor: #FBBC16;\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.6rem;\r\n\tmargin-bottom: 5%;\r\n}\r\n\r\n.block-part4__information {\r\n\tborder:1px solid #000000;\r\n\theight: 55%;\r\n\tbackground-color: #FFFFFF;\r\n\tpadding-left: 30px; \r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n\twidth: 50%;\r\n\tposition: absolute;\r\n\tleft: 3%;\r\n\ttop: 15%;\r\n}\r\n\r\n.blockpart4-information__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 2.6rem;\r\n\tcolor: #716E6E;\r\n\twidth: 80%;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.blockpart4-information__bookmark {\r\n\tposition: absolute;\r\n\tright: 5%;\r\n\tbottom: -5%;\r\n}\r\n\r\n.blockpart4-information__text:before {\r\n\tcontent: \"\\A0\\A0\\A0\";\r\n\twidth: 6%;\r\n\tborder-top: 3px solid red;\r\n\tposition: absolute;\r\n\tleft: -3%;\r\n}\r\n\r\n.section-part5,\r\n.section-part7 {\r\n\tmargin-top: 5%;\r\n}\r\n\r\n.section-part6 {\r\n\twidth: 90%;\r\n\theight: 500px;\r\n\tmargin-left: 10%;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tposition: relative;\r\n}\r\n\r\n.img-part6 {\r\n\twidth: 45%;\r\n\theight: 50%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: absolute;\r\n\tright: 10%;\r\n\tz-index: -1;\r\n}\r\n\r\n.blockpart6-card {\r\n\twidth: 40%;\r\n\theight: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tposition: absolute;\r\n\ttop: 20%;\r\n\tleft: 7%;\r\n\tz-index: 1;\r\n}\r\n\r\n\r\n.blockpart6-information {\r\n\tborder:1px solid #000000;\r\n\theight: 90%;\r\n\tbackground-color: #FFFFFF;\r\n\tpadding-left: 30px; \r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.blockpart6-text--uppercase {\r\n\ttext-transform: uppercase;\r\n\tcolor: #FBBC16;\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.6rem;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tpadding: 10px 0 20px 0;\r\n}\r\n\r\n.blockpart6-information__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 2.6rem;\r\n\tcolor: #716E6E;\r\n\twidth: 90%;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n\tposition: relative;\r\n\ttext-align: right;\r\n}\r\n\r\n.blockpart6-information__text:after {\r\n\tcontent: \"\\A0\\A0\\A0\";\r\n\twidth: 6%;\r\n\tborder-top: 3px solid red;\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: -15%;\r\n}\r\n\r\n.blockpart6-information__content {\r\n\tpadding: 20px 0;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n\r\n\r\n\r\n.blockpart6-information__date {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 2rem;\r\n}\r\n\r\n.blockpart6-information__date img,\r\n.blockpart6-information__date span,\r\n.blockpart6-information__view img,\r\n.blockpart6-information__view span {\r\n\tpadding: 0 5px;\r\n}\r\n\r\n.blockpart6-information__view {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tmargin-left: 60px;\r\n}\r\n\r\n.blockpart6-information__date span {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.4rem;\r\n}\r\n\r\n.blockpart6-information__view span {\r\n\tfont-family: Lora-Regular;\r\n\tfont-size: 1.4rem;\r\n}\r\n\r\n.buttonpart6-read {\r\n\tpadding-top: 20px;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\tpadding-right: 60px;\r\n}\r\n\r\n.blockpart6-information__bookmark {\r\n\tposition: absolute;\r\n\tbottom: -30%;\r\n\tleft: 5%;\r\n}\r\n\r\n.block-showmore {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\tmargin: 50px 0;\r\n}\r\n\r\n.block-showmore__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.4rem;\r\n\tcolor: #000000;\r\n\tmargin-left: 10px;\r\n}\r\n/*content \r\n/*footer start*/\r\n.footer {\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tz-index: 9999;\r\n\tbackground: #EBEBEB;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: center;\r\n\tpadding: 50px 0;\r\n\r\n}\r\n\r\n.footer__email {\r\n\twidth: 30%;\r\n}\r\n\r\n#footer_email {\r\n\tborder:none;\r\n\tborder-bottom: 2px solid #000000;\r\n\toutline: none;\r\n\tbackground:#EBEBEB; \r\n\theight: 20px;\r\n\twidth: 80%;\r\n}\r\n\r\n.footer__email-text,\r\n.footer__social-text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.6rem;\r\n\tcolor: #959595;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.footer__email-sign {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1.6rem;\r\n\tcolor: #959595;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.footer__social {\r\n\twidth: 30%;\r\n}\r\n\r\n.social {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\twidth: 60%;\r\n\tmargin: 30px auto 0 auto;\r\n}\r\n\r\n.footer__about {\r\n\twidth: 30%;\r\n}\r\n\r\n.footer__about-text {\r\n\twidth: 80%;\r\n\tmargin: 0 auto;\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 1rem;\r\n\tcolor: #959595;\r\n\ttext-align: justify;\r\n}\r\n/*footer end*/\r\n\r\n/*media queries*/\r\n@media (max-width: 1360px) {\r\n  .for_all { \r\n\tmargin-left: 70px;\r\n}\r\n }\r\n\r\n @media (max-width: 1200px) {\r\n  .block-information__bookmark {\r\n\tposition: absolute;\r\n\tbottom: -15%;\r\n\tright: 5%;\r\n}\r\n }\r\n\r\n @media (max-width: 1100px) {\r\n  .block-background__content { \r\n\ttop: 100px;\r\n}\r\n }\r\n\r\n  @media (max-width: 1100px) {\r\n  .block-background__content { \r\n\ttop: 80px;\r\n}\r\n\r\n.block-image__article--uppercase {\r\n\tfont-size: 1.6rem;\r\n }\r\n\r\n .block-image__header {\r\n \tfont-size: 2.4rem;\r\n }\r\n\r\n .block-date {\r\n \twidth: 60%;\r\n }\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n\t.block-card1__information{\r\n\t\tflex-direction: column;\r\n\t}\r\n\t.cards-calendar,\r\n\t.cards-view {\r\n\twidth: 100%;\r\n\t}\r\n\r\n\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n\t.block-information__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 2rem;\r\n\tcolor: #716E6E;\r\n\twidth: 120%;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.blockpart6-information__text {\r\n\tfont-size: 2rem;\r\n}\r\n.navbar {\r\n\t\twidth: 8%;\r\n\t}\r\n\r\n\r\n}\r\n\r\n@media (max-width: 992px) {\r\n\t#nav-toggle:checked ~ .section-part1 .navbar {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\tz-index: 99999;\r\n\theight: 100vh;\r\n\r\n}\r\n\r\nlabel[for=\"close\"] {\r\n\tmargin-top: 100px;\r\n}\r\n\r\n\t.block-background__content {\r\n\tposition: absolute;\r\n\ttop: 100px;\r\n\tmargin-left: 100px;\r\n\theight: auto;\r\n}\r\n\r\n.block-background{\r\n\theight: 70vh;\r\n\twidth: auto;\r\n}\r\n\t.block-information__text {\r\n\tfont-family: Lora-Bold;\r\n\tfont-size: 2rem;\r\n\tcolor: #716E6E;\r\n\twidth: 120%;\r\n\tpadding-top: 20px;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.blockpart6-information__text {\r\n\tfont-size: 2rem;\r\n}\r\n.navbar {\r\n\t\twidth: 8%;\r\n\t}\r\n\r\n.left_header, .right-menu {\r\n\tdisplay: none;\r\n}\r\n.menu-mobile {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\nheader {\r\n\tborder-bottom: 3px solid lightgrey;\r\n}\r\n\r\n.top-side {\r\n\twidth: 90%;\r\n\tmargin: 0 auto;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.logo-img {\r\n\tborder: none;\r\n}\r\n.bottom-side {\r\n\twidth: 90%;\r\n\tmargin: 0 auto;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\tmargin-bottom: 10px; \r\n}\r\n\r\n.bottom-side a {\r\n\tfont-family: ProximaNova-SemiBold;\r\n\tfont-size: 2rem;\r\n\tcolor: #000000;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n\tborder-bottom: 3px solid #FFFFFF;\r\n}\r\n\r\n.bottom-side a:hover {\r\n\tborder-bottom: 3px solid #FBBC16;\r\n}\r\n\r\n.navbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.block-image__article {\r\n\tcolor: #F70606;\r\n}\r\n\r\n.block-image__header {\r\n\tcolor: #FBBC16;\r\n}\r\n\r\nspan.block-calendar__date,\r\nspan.block-view__date {\r\n\tcolor: #FBBC16;\r\n}\r\n\r\n.section-part2 {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t\tposition: relative;\r\n}\r\n\r\n.img-part2 {\r\n\twidth: 70%;\r\n\theight: 40%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: static;\r\n\tz-index: -1;\r\n}\r\n\r\n.block-card {\r\n\twidth: 60%;\r\n\theight: 35%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tz-index: 1000;\r\n\ttop: 65%;\r\n}\r\n\r\n.block-text--uppercase {\r\n\tdisplay: none;\r\n}\r\n\r\n.block-information__bookmark {\r\n\tbottom: -15%;\r\n\tright: 25%;\r\n}\r\n\r\n.block-information__text:before {\r\n\tcontent: \"\\A0\\A0\\A0\";\r\n\twidth: 10%;\r\n\tborder-top: none; \r\n}\r\n\r\n.block-information__text {\r\n\twidth: 90%;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.section-part3 {\r\n\tpadding-top: 50px; \r\n}\r\n\r\n.section-part6 {\r\n\twidth: auto;\r\n\tdisplay: flex;\r\n\tflex-direction: column-reverse;\r\n\t\tposition: relative;\r\n}\r\n\r\n.img-part6 {\r\n\twidth: 70%;\r\n\theight: 40%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: static;\r\n\tz-index: -1;\r\n}\r\n\r\n.blockpart6-card {\r\n\twidth: 60%;\r\n\theight: 45%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tz-index: 1000;\r\n\ttop: 0%;\r\n\tleft: 0;\r\n}\r\n\r\n.blockpart6-text--uppercase {\r\n\tdisplay: none;\r\n}\r\n\r\n.blockpart6-information__bookmark {\r\n\tbottom: -15%;\r\n\tright: 25%;\r\n}\r\n\r\n.blockpart6-information__text:after {\r\n\tcontent: \"\\A0\\A0\\A0\";\r\n\twidth: 10%;\r\n\tborder-top: none; \r\n}\r\n\r\n.blockpart6-information__text {\r\n\twidth: 90%;\r\n\tmargin: 0;\r\n\tposition: static;\r\n\ttext-align: left;\r\n}\r\n}\r\n\r\n@media (max-width: 800px) {\r\n\t.section-part7 {\r\n\t\tmargin-top: 100px;\r\n\t}\r\n\r\n\t.block-background {\r\n\theight: 60vh;\r\n\tposition: relative;\r\n\twidth: auto;\r\n}\r\n\r\n\t.block-background__content {\r\n\tposition: absolute;\r\n\ttop: 70px;\r\n\tmargin-left: 80px;\r\n\theight: auto;\r\n}\r\n\r\n.block-cards {\r\n\tdisplay: grid;\r\n\twidth: 80%;\r\n\tgrid-template-columns: [col1start] 1fr [col1end];\r\n    grid-template-rows: [row1start] 1fr [row1end] 50px [row2start] 1fr [row2end] 50px [row3start] 1fr [row3end] 100px;\r\n    margin-left: 10%;\r\n}\r\n\r\n.block-cards__card1 {\r\n\t grid-column: col1start / col1end;\r\n   grid-row: row1start;\r\n   width: 100%;\r\n   height:100%;\r\n\tposition: relative;\r\n}\r\n\r\n.block-cards__card2 {\r\n\t grid-column: col1start / col1end;\r\n   grid-row: row2start;\r\n   width: 100%;\r\n   height:100%;\r\n\tposition: relative;\r\n}\r\n\r\n.block-cards__card3 {\r\n\t grid-column: col1start / col1end;\r\n   grid-row: row3start;\r\n   width: 100%;\r\n   height:100%;\r\n\tposition: relative;\r\n}\r\n\r\n.section-part1 {\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n.img-part2 {\r\n\twidth: 80%;\r\n\theight: 60%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: static;\r\n\tz-index: -1;\r\n}\r\n\r\n.block-card {\r\n\twidth: 70%;\r\n\theight: auto;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tz-index: 1000;\r\n\ttop: 0%;\r\n\tleft: 0;\r\n\tposition: relative;\r\n}\r\n\r\n.block-information__bookmark,\r\n.blockpart6-information__bookmark {\r\n\tbottom: -5%;\r\n\tright: 25%;\r\n}\r\n\r\n.section-part6 {\r\n\tmargin: 0 5%;\r\n\twidth: 85%;\r\n}\r\n.img-part6 {\r\n\twidth: 100%;\r\n\theight: 60%;\r\n\tborder-bottom: 3px solid red;\r\n\tposition: static;\r\n\tz-index: -1;\r\n}\r\n\r\n.blockpart4-information__text {\r\n\tfont-size: 2rem;\r\n}\r\n\r\n.blockpart6-card {\r\n\twidth: 80%;\r\n\theight: auto;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tz-index: 1000;\r\n\ttop: 0%;\r\n\tleft: 0;\r\n\tposition: relative;\r\n}\r\n\r\n.navbar {\r\n\tdisplay: none;\r\n}\r\n.footer {\r\ndisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.footer__email {\r\n\tdisplay: flex;\r\n\tflex-direction:column;\r\n\twidth: 80%;\r\n\tmargin: 0 auto;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.input {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n\r\n\r\n.footer__social {\r\n\tdisplay: flex;\r\n\tflex-direction:column;\r\n\twidth: 80%;\r\n\tmargin: 20px auto;\r\n\tjustify-content: center;\r\n}\r\n\r\n.footer__about {\r\n\tdisplay: flex;\r\n\tflex-direction:column;\r\n\twidth: 80%;\r\n\tmargin: 20px auto;\r\n\tjustify-content: center;\r\n}\r\n}\r\n\r\n@media (max-width: 700px) {\r\n   .block-background{\r\n\theight: 50vh;\r\n\tposition: relative;\r\n\twidth: auto;\r\n}\r\n\r\n\t.block-background__content {\r\n\tposition: absolute;\r\n\ttop: 50px;\r\n\tmargin-left: 60px;\r\n\theight: auto;\r\n}\r\n\r\n.block-part4__information {\r\n\theight: 65%;\r\n\twidth: 70%;\r\n}\r\n}\r\n\r\n", ""]);

// exports


/***/ }),
/* 3 */
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
/* 4 */
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

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
// sort by popular

function sortable(cls, attr) {
      console.log("lol in func");
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
            return parseInt(a.dataAttr) < parseInt(b.dataAttr) ? 1 : -1;
      });

      for (var j = 0; j < len; j++) {
            parent.appendChild(arrElements[j].el);
            parent.style.width = "65%";
            parent.style.margin = "0 auto";
      }
      console.log("Correct work");
}

exports.sortable = sortable;

/***/ })
/******/ ]);