import "./css/style.css";
import "./css/modalicon.css";
import "./css/fonts.css";
import {sortablepopular} from './js/sorting.js';
import {sortablenew} from './js/sorting.js';
import {scroll} from './js/scroll.js';
import {hidden1} from './js/sorting.js';
import {animationMenu} from './js/animation.js';
import {closeMenu} from './js/animation.js';
import {modalWin} from './js/views.js';
//import {tabsTeen} from './js/tabs.js';

var sortpopular = document.getElementById("popular");
sortpopular.addEventListener("click", () => sortablepopular(".blocks", "data-popular"));
sortpopular.addEventListener("click", hidden1);



var sortnew = document.getElementById("new");
sortnew.addEventListener("click", () => sortablenew(".blocks", "data-new"));
sortnew.addEventListener("click", hidden1);

scroll();

var animation = new Animation();
var menu = document.querySelector("#nav-toggle");
menu.addEventListener("change",animationMenu);
var menuclose = document.querySelector("#close");
menuclose.addEventListener("change", closeMenu);
/*
var teen = document.querySelector(".teenSide");
teen.addEventListener("click", tabsTeen);
modalWin();
*/

