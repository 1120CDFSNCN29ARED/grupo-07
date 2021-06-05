window.addEventListener("load", function () {
  const email = document.getElementById("email");
  const contraseña = document.getElementById("pass");
  const form = document.querySelector(".form-menu");
  const erroresElement = document.getElementById("errores");

  form.addEventListener("submit", function (e) {
    let mensajesError = [];

    if (email.value === "" || email.value == null) {
      mensajesError.push("El campo de email debe estar completo");
    }

    if (contraseña.value == "" || contraseña.value == null) {
      mensajesError.push("El campo de contraseña debe estar completo");
    } else if (contraseña.value.length <= 8) {
      mensajesError.push("La contraseña debe ser más larga que 8 caracteres");
    }

    // if (contraseña.value.length >= 20) {
    // mensajesError.push("La contraseña debe ser menos que 20 caracteres");
    // }

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
