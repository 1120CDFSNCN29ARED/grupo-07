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
    } else if (descuento.value.lenght <= 0) {
      mensajesError.push("la cantidad debe ser más igual o grande que cero");
    }

    if (cantidad.value === "" || cantidad.value == null) {
      //document.querySelector("small.nameError").innerHTML +=
      mensajesError.push("El campo de descuento debe estar completo");
    } else if (cantidad.value.lenght < 0) {
      mensajesError.push("la cantidad debe ser más igual o grande que cero");
    }

    if (imagen.value === "" || imagen.value == null) {
      //document.querySelector("small.nameError").innerHTML +=
      mensajesError.push("Debes insertar imagen");
    } /* else if (
      imagen.value != ".JPG" &&
      imagen.value != ".jpg" &&
      imagen.value != ".JPEG" &&
      imagen.value != ".jpeg" &&
      imagen.value != ".PNG" &&
      imagen.value != ".png" &&
      imagen.value != ".GIF" &&
      imagen.value != ".gif"
    ) {
      //document.querySelector("small.pictureError").innerHTML +=
      mensajesError.push(
        "No es la extension correcta, solo archivos JPG, JPEG, PNG, GIF"
      );
    }*/

    if (descripcion.value == " " || descripcion.value == null) {
      mensajesError.push("El campo de descripcion debe estar completo");
    } else if (descripcion.value.lenght < 20) {
      mensajesError.push(
        "El campo de descripción debe tener al menos 20 caracteres"
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
