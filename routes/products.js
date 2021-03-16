// ************ Require's ************
const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.join(__dirname, "../../public/img/products");
    if (file.mimetype != "image/jpeg") {
      return cb(new Error("Solo se aceptan imagenes en jpg o png"));
    }
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const newFilename = Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

const upload = multer({ storage });

// ************ Controller Require ************
const products = require("../controllers/products");

/*** GET ALL PRODUCTS ***/
router.get("/", products.list);

/***GET ONE PRODUCT - detail */
router.get("/productDetail/:id", products.detail);

/***PRODUCT CART */
router.get("/productCart", products.cart);

/***PRODUCT CREATE - form creation and processing form */
router.get("/productsAdd", products.add);
router.post("/", upload.single("picture"), products.new);

/*** GET ONE PRODUCT- MODIFICATION LIST PRODUCTS */

router.get("/modificationListProducts", products.modification);

/*** EDIT ONE PRODUCT */
router.get("/modificationListProducts/:id/edit", products.edit);
router.put("/modificationListProducts/:id", products.update);

/*** DELETE ONE PRODUCT */
router.delete("/modificationListProducts/:id", products.destroy);

module.exports = router;
