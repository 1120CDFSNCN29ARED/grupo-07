window.addEvenetListener("load", function () {
  let formulario = document.querySelector("form.form-menu");
});

formulario.addEvenetListener("submit", function (e) {
  let errores = [];

  let inputName = document.querySelector("input.name");

  if (inputName.value == "") {
    errores.push("El campo de nombre debe estar completo");
  } else if (inputName.value.lenght < 3) {
    errores.push("el campo de nombre debe tener al menos 3 caracteres");
  }

  let inputSurname = document.querySelector("input.surname");

  if (inputSurname.value == "") {
    errores.push("El campo de precio debe estar completo");
  } else if (inputSurname.value.lenght < 4) {
    errores.push("el apellido debe tener al menos 3 caracteres");
  }

  let inputPicture = document.querySelector("input.picture");

  if (inputPicture.value == "") {
    errores.push("Es necesario insertar imagen");
  }

  let inputStreet = document.querySelector("input.street");

  if (inputStreet.value == "") {
    errores.push("El campo de calle y n° debe estar completo");
  } else if (inputStreet.value.lenght < 6) {
    errores.push("la dirección debe tener al menos 6 caracteres");
  }

  let inputFloor = document.querySelector("input.flat");

  if (inputFloor.value == "") {
    errores.push("El campo de piso y departamento debe estar completo");
  } else if (inputFloor.value.lenght < 2) {
    errores.push("El Piso y depto debe tener al menos 2 caracteres");
  }

  //FALTA ENTRECALLES, LOCALIDAD, CP, TELEFONO, FECHA DE NACIMIENTO, EMAIL, CONTRASEÑA, REPETIR CONTRASEÑA

  if (errores.length > 0) {
    e.preventDefault();

    let ulErrores = document.querySelector("div.erorres ul");
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
    }
  }
});
