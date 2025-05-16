document.getElementById('mostrarInfoBtn').addEventListener('click', function() {
  var info = document.getElementById('infoAdicional');
  if (info.classList.contains('show')) {
    info.classList.remove('show'); // Oculta el contenido adicional
    this.textContent = 'Descubre más'; // Cambia el texto del botón
  } else {
    info.classList.add('show'); // Muestra el contenido adicional
    this.textContent = 'Ocultar información'; // Cambia el texto del botón
  }
});



  $(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      dots: true,
      arrows: false,
      autoplaySpeed: 2000,
    });
  });