document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
      var navbar = document.getElementById("navbar");
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
      if (scrollPosition > 450) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
  });
  
  var f = 0;
  var fondo = new Array(3);
  fondo[0] = "header-0.png";
  fondo[1] = "header-1.png";
  fondo[2] = "header-2.png";
  
  function rotacion() {
    document.getElementById("fondo-carousel").src = fondo[f];
    f++;
    if (f == fondo.length) {
      f = 0;
    }
  
    setTimeout(rotacion, 3000);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
      rotacion();
  })