// index.js

// Carrusel de imágenes
let currentIndex = 0; // Índice de la imagen actual
const images = document.querySelectorAll('.carousel-image'); // Selecciona todas las imágenes
const totalImages = images.length; // Total de imágenes

function cambiarImagen() {
    currentIndex = (currentIndex + 1) % totalImages; // Cambia al siguiente índice
    const translateX = -currentIndex * 100; // Calcula el desplazamiento
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${translateX}%)`; // Aplica el desplazamiento
}

// Cambia la imagen cada 5 segundos
setInterval(cambiarImagen, 2000);

// Efectos del navbar
const navbar = document.querySelector('nav');
window.onscroll = function() {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
};
