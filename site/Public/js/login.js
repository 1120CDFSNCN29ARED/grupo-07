window.addEventListener("load", function () {
  let formulario = document.querySelector("form.form-menu");

  formulario.addEventListener("submit", function (e) {
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
        ulErrores.innerHTML += "<ul>" + errores[i] + "</ul>";
      }
    }
  });
});
/*const formulario = document.querySelector(".form-menu");
const email = document.getElementById("email");
const contraseña = document.getElementById("pass");
const pepe = document.querySelector("p");

formulario.onsubmit = function (e) {
  if (email.value === "" || contraseña.value === "") {
    e.preventDefault();
    pepe.textContent = "llena el campo";
  }
};*/
