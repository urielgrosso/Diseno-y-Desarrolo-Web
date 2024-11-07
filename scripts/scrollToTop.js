// Obtener el botón
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block'; // Mostrar el botón
    } else {
        scrollToTopBtn.style.display = 'none'; // Ocultar el botón
    }
};

// Función para hacer scroll hacia arriba
scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};