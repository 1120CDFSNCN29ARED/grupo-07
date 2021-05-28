window.addEvenetListener("load", function () {
  let formulario = document.querySelector("form.form-menu");
});

formulario.addEvenetListener("submit", function (e) {
  let errores = [];

  let inputEmail = document.querySelector("input.email");

  if (inputEmail.value == "") {
    errores.push("El campo de email debe estar completo");
  }

  let inputPass = document.querySelector("input.pass");

  if (inputPass.value == "") {
    errores.push("El campo de contraseña debe estar completo");
  }

  if (errores.length > 0) {
    e.preventDefault();

    let ulErrores = document.querySelector("div.erorres ul");
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
    }
  }
});
