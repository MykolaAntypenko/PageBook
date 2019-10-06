function tabsTeen() {
	var teens = document.querySelectorAll(".teen");
	for (var blocks of teens) {
	blocks.style.display = "flex";
	blocks.style.width = "40%";
    blocks.style.margin = "0 auto";

}
	var childs = document.querySelectorAll(".child");
	for (var blocks of childs) {
	blocks.style.display = "none";

}
console.log("good");
}

export {tabsTeen};