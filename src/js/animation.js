
function animationMenu () {
  var nav = document.querySelector(".navbar");
    var widthOpen = 30 + "%";
    nav.style.width = widthOpen;
    console.log("ok");
    nav.style.transition = "width 0.5s";
}

function animationMobile() {
    if (window.matchMedia("(max-width: 992px)").matches) {
        var navMobile = document.querySelector(".navbar");
        var widthMobile = 100 + "%";
 navMobile.style.width = widthMobile;
 navMobile.style.transition = "width 0.5s";
} 
}

function closeMobile() {
    if (window.matchMedia("(max-width: 992px)").matches) {
    var navMobile = document.querySelector(".navbar");
        var widthClose = 5 + "%";
 navMobile.style.transition = "width 0.3s";
 navMobile.style.width = widthClose;
} 
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
export {animationMobile};
export {closeMobile};
 