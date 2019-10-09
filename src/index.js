import "./css/style.css";
import "./css/modalIcon.css";
import "./css/fonts.css";
import {sortablepopular} from './js/sorting.js';
import {sortablenew} from './js/sorting.js';
import {scroll} from './js/scroll.js';
import {hidden1} from './js/sorting.js';
import {animationMenu} from './js/animation.js';
import {closeMenu} from './js/animation.js';
import {animationMobile} from './js/animation.js';
import {closeMobile} from './js/animation.js';
import {modalWin} from './js/views.js';
import {tabsAll} from './js/tabs.js';
import {tabsKids} from './js/tabs.js';
import {tabsTeen} from './js/tabs.js';

var sortpopular = document.getElementById("popular");
sortpopular.addEventListener("click", () => sortablepopular(".blocks", "data-popular"));
sortpopular.addEventListener("click", hidden1);



var sortnew = document.getElementById("new");
sortnew.addEventListener("click", () => sortablenew(".blocks", "data-new"));
sortnew.addEventListener("click", hidden1);

scroll();


var menu = document.querySelector("#nav-toggle");
menu.addEventListener("change", animationMenu);
var menuclose = document.querySelector("#close");
menuclose.addEventListener("change", closeMenu);
var menuMobile = document.querySelector("#nav-toggle__mobile");
menuMobile.addEventListener("change", animationMobile);
var menuclose = document.querySelector("#close");
menuclose.addEventListener("change", closeMobile);
modalWin();

var tabTeen = document.querySelector(".teenSide");
tabTeen.addEventListener("click", tabsTeen);
var tabKid = document.querySelector(".babySide");
tabKid.addEventListener("click", tabsKids);
var tabAll = document.querySelector(".allSide");
tabAll.addEventListener("click", tabsAll);

var tabTeenMobile = document.querySelector(".teenMobile");
tabTeenMobile.addEventListener("click", tabsTeen);
tabTeenMobile.addEventListener("click", function() {
	tabTeenMobile.style.borderBottom = "3px solid #FBBC16";
	tabKidMobile.style.borderBottom = "3px solid #FFFFFF";
	tabAllMobile.style.borderBottom = "3px solid #FFFFFF";
});
var tabKidMobile = document.querySelector(".babyMobile");
tabKidMobile.addEventListener("click", tabsKids);
tabKidMobile.addEventListener("click", function() {
	tabKidMobile.style.borderBottom = "3px solid #FBBC16";
	tabAllMobile.style.borderBottom = "3px solid #FFFFFF";
	tabTeenMobile.style.borderBottom = "3px solid #FFFFFF";
});
var tabAllMobile = document.querySelector(".allMobile");
tabAllMobile.addEventListener("click", tabsAll);
tabAllMobile.addEventListener("click", function() {
	tabAllMobile.style.borderBottom = "3px solid #FBBC16";
	tabTeenMobile.style.borderBottom = "3px solid #FFFFFF";
	tabKidMobile.style.borderBottom = "3px solid #FFFFFF";
});


