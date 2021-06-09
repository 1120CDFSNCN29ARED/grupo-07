// ************ Require's ************
const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();

//* Middleware Multer*//
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.join(__dirname, "../public/img/products");

    if (
      file.mimetype != "image/jpeg" &&
      file.mimetype != "image/png" &&
      file.mimetype != "image/jpg" &&
      file.mimetype != "image/gif"
    ) {
      return cb(new Error("Solo se aceptan archivos JPEG , PNG , JPG o GIF"));
    }
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const newFilename = Date.now() + "_" + file.originalname;
    cb(null, newFilename); //primer parametro no permitimos error en upload y el 2° agregamos el nombre
    return file;
  },
});

const upload = multer({ storage }).single("picture");

// ************ Controller Require ************
const products = require("../controllers/products");

// Middelware Required
const middlewareUsuario = require("../middleware/middlewareUsuario");
const addValidation = require("../middleware/addValidation");
const updateValidation = require("../middleware/updateValidation");

/*BUSCADOR PRODUCTS*/
router.get("/buscar", products.buscar);

/* GET ALL PRODUCTS */
router.get("/", products.list);

/***GET ONE PRODUCT - Detail */
router.get("/productDetail/:id", products.detail);

/***PRODUCT CART */
router.get("/productCart/:id", products.cart);
//router.get("/productCart", middlewareUsuario);

/***PRODUCT CREATE - Form creation and processing form */
router.get("/productsAdd", addValidation, products.add);
router.post("/productsAdd", upload, products.create);

/*** GET LIST PRODUCTS- MODIFICATION LIST PRODUCTS */

router.get("/modificationListProducts", products.modificationList);

/*** EDIT ONE PRODUCT  - Form update product and processing form*/
router.get("/productsEdit/:id", products.edit);
router.put("/productsUpdate/:id", products.update);

/*** DELETE ONE PRODUCT */
router.get("/productsDelete/:id", products.delete);
router.delete("/productsDelete/:id", products.destroy);

module.exports = router;
