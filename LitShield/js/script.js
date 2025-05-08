document.getElementById('mostrarInfoBtn').addEventListener('click', function() {
  var info = document.getElementById('informacionAdicional');
  if (info.classList.contains('hidden')) {
    info.classList.remove('hidden');
    this.textContent = 'Ocultar información';
    this.classList.add('small-button'); // Agrega la clase para cambiar el estilo
  } else {
    info.classList.add('hidden');
    this.textContent = 'Mostrar más información';
    this.classList.remove('small-button'); // Quita la clase para restaurar el estilo
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

  
  