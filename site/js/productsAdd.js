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

  let inputPicture = document.querySelector("input.picture");

  if (inputPicture.value == "") {
    errores.push("Es necesario insertar imagen");
  }

  let inputPrice = document.querySelector("input.price");

  if (inputPrice.value == "") {
    errores.push("El campo de precio debe estar completo");
  } else if (inputPrice.value.lenght < 0) {
    errores.push("la cantidad debe ser más grande que cero");
  }

  let inputDiscount = document.querySelector("input.discount");

  if (inputDiscount.value == "") {
    errores.push("El campo de descuento debe estar completo");
  } else if (inputDiscount.value.lenght < 0) {
    errores.push("la cantidad debe ser más igual o grande que cero");
  }

  let inputWeight = document.querySelector("input.weight");

  if (inputWeight.value == "") {
    errores.push("El campo de peso debe estar completo");
  } else if (inputWeight.value.lenght < 0) {
    errores.push("la cantidad debe ser más grande que cero");
  }

  let inputDescription = document.querySelector("input.description");

  if (inputDescription.value == "") {
    errores.push("El campo de peso debe estar completo");
  } else if (inputDescription.value.lenght < 10) {
    errores.push("el campo de descripción debe tener al menos 10 caracteres");
  }

  if (errores.length > 0) {
    e.preventDefault();

    let ulErrores = document.querySelector("div.erorres ul");
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
    }
  }
});
