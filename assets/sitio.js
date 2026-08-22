// Menú de móvil. Nada más: la web no necesita JavaScript para leerse.
(function () {
  var boton = document.querySelector('.hamburguesa');
  var nav = document.getElementById('nav');
  if (!boton || !nav) return;

  function cerrar() {
    nav.setAttribute('data-abierto', 'no');
    boton.setAttribute('aria-expanded', 'false');
  }

  boton.addEventListener('click', function () {
    var abierto = nav.getAttribute('data-abierto') === 'si';
    nav.setAttribute('data-abierto', abierto ? 'no' : 'si');
    boton.setAttribute('aria-expanded', abierto ? 'false' : 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') cerrar();
  });

  // al pasar a escritorio, el menú desplegable deja de tener sentido
  var ancho = window.matchMedia('(min-width: 781px)');
  (ancho.addEventListener ? ancho.addEventListener.bind(ancho, 'change') : ancho.addListener.bind(ancho))(cerrar);
})();
