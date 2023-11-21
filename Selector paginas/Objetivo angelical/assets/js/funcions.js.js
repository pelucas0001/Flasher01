function abrirPagina() {
  var select = document.getElementById("imagen");
  var opcionSeleccionada = select.value;
  window.location.href = opcionSeleccionada;
}