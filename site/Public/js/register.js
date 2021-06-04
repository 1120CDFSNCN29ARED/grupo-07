/*window.addEventListener("load", function () {
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
});*/

window.addEventListener("load", function () {
  const email = document.getElementById("email");
  const contraseña = document.getElementById("pass");
  const nombre = document.getElementById("name");
  const apellido = document.getElementById("surname");
  const imagen = document.getElementById("picture");
  const form = document.querySelector(".form-menu");
  const erroresElement = document.getElementById("errores");

  form.addEventListener("submit", function (e) {
    let mensajesError = [];

    if (nombre.value === "" || nombre.value == null) {
      //document.querySelector("small.nameError").innerHTML +=
      mensajesError.push("El campo de nombre debe estar completo");
    }

    if (apellido.value === "" || apellido.value == null) {
      //document.querySelector("small.surnameError").innerHTML +=
      mensajesError.push("El campo de apellido debe estar completo");
    }

    if (imagen.value === "" || imagen.value == null) {
      //document.querySelector("small.pictureError").innerHTML +=
      mensajesError.push("Se debe insertar imagen");
    }

    if (
      imagen.value != ".JPG" &&
      imagen.value != ".JPEG" &&
      imagen.value != ".PNG" &&
      imagen.value != ".GIF"
    ) {
      //document.querySelector("small.pictureError").innerHTML +=
      mensajesError.push(
        "No es la extension correcta, solo archivos JPG, JPEG, PNG, GIF"
      );
    }

    if (email.value === "" || email.value == null) {
      // document.querySelector("small.emailError").innerHTML +=
      mensajesError.push("El campo de  debe estar completo");
    }

    if (contraseña.value == "" || contraseña.value == null) {
      mensajesError.push("El campo de contraseña debe estar completo");
    }

    if (contraseña.value.length <= 8) {
      mensajesError.push("La contraseña debe ser más larga que 8 caracteres");
    }

    if (contraseña.value.length >= 20) {
      mensajesError.push("La contraseña debe ser menos que 20 caracteres");
    }

    if (mensajesError.length > 0) {
      e.preventDefault();
      erroresElement.innerText = mensajesError.join(", ");
      erroresElement.style.color = "red";
      erroresElement.style.textAlign = "center";
      erroresElement.style.fontSize = "14px";
      erroresElement.style.display = "flex";
      erroresElement.style.margin = "5px";
    }
  });
});
