var botonEnviar = document.getElementById("boton-enviar");
botonEnviar.addEventListener("click", function (evento) {

  //Definición de Datos

  var correo = document.getElementById("correo").value;
  var contrasenna = document.getElementById("contrasenna").value;
 
  
  //Definición de Errores

  var correoError = document.getElementById("correo-error");
  var contrasennaError = document.getElementById("contrasenna-error");
 

  //Los errores se inicializan vacíos

  correoError.innerHTML = "";
  contrasennaError.innerHTML = "";
 
  //Si los campos están vacíos, se agrega el error automáticamente

  if (correo == "") {
    correoError.innerHTML = "Este campo es requerido";
  }
  if (contrasenna == "") {
    contrasennaError.innerHTML = "Este campo es requerido";
  }
  
  //Prevenir el envío del formulario si hay errores
  if (correo == "" || contrasenna == "") {
    evento.preventDefault();
  } 
  else {
    Swal.fire(
      '¡Enviado!',
      'Su formulario ha sido enviado correctamente.',
      'success'
    )
  }
});
