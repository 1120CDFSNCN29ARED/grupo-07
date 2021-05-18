window.addEvenetListener("load", function () {
  let formulario = document.querySelector("form.form-menu");
});

formulario.addEvenetListener("submit", function (e) {
  let errores = [];

  let inputName = document.querySelector("input.name");

  if (inputName.value == "") {
    errores.push("El campo de nombre debe estar completo");
  } else if (inputName.value.lenght < 4) {
    errores.push("el campo de nombre debe tener al menos 4 caracteres");
  }

  let inputPrice = document.querySelector("input.price");

  if (inputPrice.value == "") {
    errores.push("El campo de nombre debe estar completo");
  } else if (inputName.value.lenght < 0) {
    errores.push("la cantidad debe ser más grande que cero");
  }

  let inputName = document.querySelector("input.name");

  if (inputName.value == "") {
    errores.push("El campo de nombre debe estar completo");
  } else if (inputName.value.lenght < 4) {
    errores.push("el campo de nombre debe tener al menos 4 caracteres");
  }

  if (errores.length > 0) {
    e.preventDefault();

    let ulErrores = document.querySelector("div.erorres ul");
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
    }
  }
});
