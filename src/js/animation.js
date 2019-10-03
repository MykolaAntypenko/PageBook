
      function animation_menu () {
      var start = Date.now();
      var navbar = document.querySelector(".navbar");
       var navmenu = document.querySelector(".navigation-menu");
      var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        navbar.style.width = timePassed/1.4 + 'px';
        if (timePassed > 600) clearInterval(timer);
      }, 20);
    }

      function animation_close() {
      var nav = document.querySelector(".navbar");
        nav.style.width = 5 + "%";
        nav.style.transition = "all 0.5s"
    }

    export {animation_menu};
    export {animation_close};  