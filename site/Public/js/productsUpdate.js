/*window.addEventListener("load", function () {
  let formulario = document.querySelector("form.form-menu");
});

formulario.addEventListener("submit", function (e) {
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
      ulErrores.innerHTML += "<ul>" + errores[i] + "</ul>";
    }
  }
});*/

window.addEventListener("load", function () {
  const form = document.querySelector(".form-menu");
  const nombre = document.getElementById("name");
  const precio = document.getElementById("price");
  const descuento = document.getElementById("discount");
  const imagen = document.getElementById("picture");
  const descripcion = document.getElementById("description");
  const cantidad = this.document.getElementById("quantity");
  const erroresElement = document.getElementById("errores");

  form.addEventListener("submit", function (e) {
    let mensajesError = [];

    if (nombre.value === "" || nombre.value == null) {
      //document.querySelector("small.nameError").innerHTML +=
      mensajesError.push("El campo de nombre debe estar completo");
    } else if (nombre.value.lenght < 5) {
      mensajesError.push("El nombre debe tener al menos 5 caracteres");
    }

    if (precio.value === "" || precio.value == null) {
      //document.querySelector("small.nameError").innerHTML +=
      mensajesError.push("El campo de precio debe estar completo");
    } else if (precio.value.lenght < 0) {
      mensajesError.push("la cantidad debe ser más grande que cero");
    }

    if (descuento.value === "" || descuento.value == null) {
      //document.querySelector("small.nameError").innerHTML +=
      mensajesError.push("El campo de descuento debe estar completo");
    } else if (descuento.value.lenght < 0) {
      mensajesError.push("la cantidad debe ser más igual o grande que cero");
    }

    if (cantidad.value === "" || cantidad.value == null) {
      //document.querySelector("small.nameError").innerHTML +=
      mensajesError.push("El campo de descuento debe estar completo");
    } else if (cantidad.value.lenght < 0) {
      mensajesError.push("la cantidad debe ser más igual o grande que cero");
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

    if (descripcion.value == " " || descripcion.value == null) {
      mensajesError.push("El campo de descripcion debe estar completo");
    } else if (descripcion.value.lenght < 20) {
      mensajesError.push(
        "el campo de descripción debe tener al menos 20 caracteres"
      );
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
