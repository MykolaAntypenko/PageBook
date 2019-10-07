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

function tabs() {
	var content = document.querySelectorAll(".blocks");
	var child = document.querySelectorAll(".childs");
	var teen = document.querySelectorAll(".teens");
    for (var block of content) {
        block.style.display = "none";
	}
	var element = document.querySelector(".bottom-side__links");
    switch (element.textContent) {
        case "Для усіх":
            for (const block of content) {
                block.style.display = "flex";
            }
            break;

        case "Teen Side":
            for (const block of teen) {
                block.style.display = "flex";
            }
            break;

        case "Baby Side":
            for (const block of child) {
                block.style.display = "flex";
            }
            break;

        default:
            throw "Unexpected select value during filtering";
            break;
    }
}

export {tabs};