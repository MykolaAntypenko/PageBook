

import "E:/EPAM/PageBookProject/src/css/style.css";
import {sortable} from './js/sorting.js';
import {animation_menu} from './js/animation.js';
import {animation_close} from './js/animation.js';



const sort = document.getElementById("lol");

sort.addEventListener("click", () => sortable(".blocks", "data-views"));

var menu = document.querySelector("#nav-toggle");
	menu.addEventListener("change", animation_menu);

	var close = document.querySelector("#close");
	close.addEventListener("change", animation_close);
