window.addEventListener("load", function () {
  let formulario = document.querySelector("form.form-menu");
});

formulario.addEventListener("submit", function (e) {
  let errores = [];

  let inputName = document.querySelector("input.name");

  if (inputName.value == "") {
    errores.push("El campo de nombre debe estar completo");
  } else if (inputName.value.lenght < 3) {
    errores.push("el campo de nombre debe tener al menos 3 caracteres");
  }

  let inputSurname = document.querySelector("input.surname");

  if (inputSurname.value == "") {
    errores.push("El campo de apellido debe estar completo");
  } else if (inputSurname.value.lenght < 3) {
    errores.push("el apellido debe tener al menos 3 caracteres");
  }

  let inputPicture = document.querySelector("input.picture");

  if (inputPicture.value == "") {
    errores.push("Es necesario insertar imagen");
  }

  let inputEmail = document.querySelector("input.email");

  if (inputEmail.value == "") {
    errores.push("El campo de email debe estar completo");
  }

  let inputPass = document.querySelector("input.pass");

  if (inputPass.value == "") {
    errores.push("El campo de contraseña debe estar completo");
  } else if (inputPass.value.lenght < 6) {
    errores.push("La contraseña debe tener al menos 6 caracteres");
  }

  let inputRepeatPassword = document.querySelector("input.repeatPassword");

  if (inputRepeatPassword.value == "") {
    errores.push("El campo de contraseña debe estar completo");
  }

  if (errores.length > 0) {
    e.preventDefault();

    let ulErrores = document.querySelector("div.erorres ul");
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<ul>" + errores[i] + "</ul>";
    }
  }
});
