
function animationMenu () {
  var nav = document.querySelector(".navbar");
    var widthOpen = 30 + "%";
    nav.style.width = widthOpen;
    console.log("ok");
    nav.style.transition = "width 0.5s";
}

function closeMenu () {
  var nav = document.querySelector(".navbar");
    var widthClose = 5 + "%";
    nav.style.width = widthClose;
    console.log("ok");
    nav.style.transition = "width 0.3s";
}

export {animationMenu};
export {closeMenu};
 