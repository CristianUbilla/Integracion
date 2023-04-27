var botonEnviar = document.getElementById("boton-enviar");
botonEnviar.addEventListener("click", function (evento) {

  var owner = document.getElementById("owner").value;
  var pet = document.getElementById("pet").value;
  var contact = document.getElementById("contact").value;
  var message = document.getElementById("message").value;
  var animal = document.getElementsByName("animales")[0].value;

  var ownerError = document.getElementById("owner-error");
  var petError = document.getElementById("pet-error");
  var contactError = document.getElementById("contact-error");
  var messageError = document.getElementById("message-error");
  var animalError = document.getElementById("animal-error");

  ownerError.innerHTML = "";
  petError.innerHTML = "";
  contactError.innerHTML = "";
  messageError.innerHTML = "";
  animalError.innerHTML = "";

  if (owner == "") {
    ownerError.innerHTML = "Este campo es requerido";
  }
  if (pet == "") {
    petError.innerHTML = "Este campo es requerido";
  }
  if (contact == "") {
    contactError.innerHTML = "Este campo es requerido";
  }
  if (message == "") {
    messageError.innerHTML = "Este campo es requerido";
  }

  if (animal == "Seleccione una opción") {
    animalError.innerHTML = "Este campo es requerido";
  }
  //Prevenir el envío del formulario si hay errores
  if (owner == "" || pet == "" || animal == "Seleccione una opción" || contact == "" || message == "") {
    evento.preventDefault();
  } else {
    Swal.fire(
      '¡Enviado!',
      'Su formulario ha sido enviado correctamente.',
      'success'
    )
  }
});
