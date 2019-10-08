/*function tabsTeen() {
	var teen = document.querySelectorAll(".teens");
	for (var blocks of teen) {
	blocks.style.display = "flex";
	blocks.style.width = "40%";
    blocks.style.margin = "0 auto";
}
	var childs = document.querySelectorAll(".child");
	for (var blocks of childs) {
	blocks.style.display = "none";

}
console.log("good");
}*/

function tabsTeen() {
	var content = document.querySelectorAll(".all");
	var child = document.querySelectorAll(".childs");
    var teen = document.querySelectorAll(".teens");
    var menu = document.querySelector(".for_all-menu");
    for (var block of content) {
        block.style.display = "none";
	}
	var element = document.querySelector(".teenSide");
    switch (element.textContent) {
        case "Teen Side":
                for (const block of content) {
                    block.style.display = "none";
                }
            for (const block of teen) {
                block.style.display = "block";
            }
            for (const block of child) {
                block.style.display = "none";
            }
            menu.innerHTML = "Teen Side&nbsp;&nbsp;&nbsp;<i class='fa fa-chevron-down' aria-hidden='true'></i>";
            break;

        default:
            throw "Unexpected select value during filtering";
            break;
    }
}
function tabsKids () {
    var content = document.querySelectorAll(".all");
	var child = document.querySelectorAll(".childs");
	var teen = document.querySelectorAll(".teens");
    var element = document.querySelector(".babySide");
    var menu = document.querySelector(".for_all-menu");
    switch (element.textContent) {
        case "Baby Side":
                for (const block of content) {
                    block.style.display = "none";
                }
                for (const block of teen) {
                    block.style.display = "none";
                }
            for (const block of child) {
                block.style.display = "block";
            }
            menu.innerHTML = "Baby Side&nbsp;&nbsp;&nbsp;<i class='fa fa-chevron-down' aria-hidden='true'></i>";
            break;

        default:
            throw "Unexpected select value during filtering";
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
            for (const block of content) {
                block.style.display = "block";
            }
            for (const block of teen) {
                block.style.display = "block";
            }
            for (const block of child) {
                block.style.display = "block";
            }
            menu.innerHTML = "Для усіх&nbsp;&nbsp;&nbsp;<i class='fa fa-chevron-down' aria-hidden='true'></i>";
            break;

        default:
            throw "Unexpected select value during filtering";
            break;
    }
}

export {tabsTeen};
export {tabsKids};
export {tabsAll};