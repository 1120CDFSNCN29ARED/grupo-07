window.addEventListener("load", function () {
  const email = document.getElementById("email");
  const contraseña = document.getElementById("pass");
  const form = document.querySelector(".form-menu");
  const erroresElement = document.getElementById("errores");

  form.addEventListener("submit", function (e) {
    let mensajes = [];

    if (email.value === "" || email.value == null) {
      mensajes.push("El campo de email debe estar completo");
    }

    if (contraseña.value == "" || contraseña.value == null) {
      mensajes.push("El campo de contraseña debe estar completo");
    }

    if (contraseña.value.length <= 8) {
      mensajes.push("La contraseña debe ser más larga que 8 caracteres");
    }

    if (contraseña.value.length >= 20) {
      mensajes.push("La contraseña debe ser menos que 20 caracteres");
    }

    if (mensajes.length > 0) {
      e.preventDefault();
      erroresElement.innerText = mensajes.join(", ");
    }
  });
});
