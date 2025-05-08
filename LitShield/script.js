// script.js
document.getElementById('mostrarInfoBtn').addEventListener('click', function() {
  var info = document.getElementById('informacionAdicional');
  if (info.classList.contains('hidden')) {
    info.classList.remove('hidden');
    this.textContent = 'Ocultar información';
  } else {
    info.classList.add('hidden');
    this.textContent = 'Mostrar más información';
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

  
  