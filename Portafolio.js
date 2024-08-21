let slideIndex = 0;
showSlides(slideIndex);

// Función para cambiar la diapositiva
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar la diapositiva correspondiente
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    // Si llegamos al final de las imágenes, volvemos al inicio
    if (n >= slides.length) {
        slideIndex = 0;
    }

    // Si estamos en el principio y queremos retroceder, vamos a la última imagen
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Oculta todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Muestra la diapositiva correspondiente
    slides[slideIndex].style.display = "block";
}
