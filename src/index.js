

import "./css/style.css";
import {sortable} from './js/sorting.js';
import {hidden1} from './js/sorting.js';
import {hidden2} from './js/sorting.js';
import {animation_menu} from './js/animation.js';
import {animation_close} from './js/animation.js';



const sort = document.getElementById("popular");
sort.addEventListener("click", () => sortable(".blocks", "data-views"));
sort.addEventListener("click", hidden1);
sort.addEventListener("click", hidden2);

var menu = document.querySelector("#nav-toggle");
	menu.addEventListener("change", animation_menu);

	var close = document.querySelector("#close");
	close.addEventListener("change", animation_close);
