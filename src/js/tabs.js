
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
                    block.style.marginTop = "30px";
                }
            for (const block of teen) {
                block.style.display = "block";
                block.style.marginTop = "30px";
            }
            for (const block of child) {
                block.style.display = "none";
                block.style.marginTop = "30px";
            }
            menu.innerHTML = "Teen Side&nbsp;&nbsp;&nbsp;<i class='fa fa-chevron-down' aria-hidden='true'></i>";
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
                    block.style.marginTop = "30px";
                }
                for (const block of teen) {
                    block.style.display = "none";
                    block.style.marginTop = "30px";
                }
            for (const block of child) {
                block.style.display = "block";
                block.style.marginTop = "30px";
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
            for (const block of content) {
                block.style.display = "block";
                block.style.marginTop = "30px";
            }
            for (const block of teen) {
                block.style.display = "block";
                block.style.marginTop = "30px";
            }
            for (const block of child) {
                block.style.display = "block";
                block.style.marginTop = "30px";
            }
            menu.innerHTML = "Для усіх&nbsp;&nbsp;&nbsp;<i class='fa fa-chevron-down' aria-hidden='true'></i>";
            break;

    }
}

export {tabsTeen};
export {tabsKids};
export {tabsAll};