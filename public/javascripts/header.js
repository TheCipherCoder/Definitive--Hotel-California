// JavaScript para cambiar el fondo de la barra de navegación al desplazarse
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Fondo más opaco
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Fondo menos opaco
    }
};
