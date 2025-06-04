document.getElementById("proyectos").addEventListener('change', function() {
    const ruta = this.value 
    if(ruta) {
        window.location.href = ruta;
    }
});
 // Acordeón toggle
 /*document.querySelector(".acordeon-btn").addEventListener("click", function () {
    document.querySelector(".acordeon-contenido").classList.toggle("activo");
  });

  // Carrusel con flechas
  function moverCarrusel(direccion) {
    const carrusel = document.getElementById("carrusel-mapas");
    const imagen = carrusel.querySelector("img");
    const desplazamiento = imagen.offsetWidth + 20; // ancho + gap
    carrusel.scrollBy({ left: direccion * desplazamiento, behavior: 'smooth' });
  } */
    let indiceActual = 0;

function cambiarSlide(direccion) {
  const carrusel = document.getElementById("sliderTrack");
  const imagen = carrusel.querySelector("img");
  const totalSlides = carrusel.children.length;

  indiceActual += direccion;

  if (indiceActual < 0) indiceActual = totalSlides - 1;
  if (indiceActual >= totalSlides) indiceActual = 0;

  carrusel.style.transform = `translateX(-${indiceActual * imagen.offsetWidth}px)`;
}