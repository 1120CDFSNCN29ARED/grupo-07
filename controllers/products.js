const { render } = require("ejs");
const fs = require("fs");
const path = require("path");

const toThousand = (n) => {
  return n.toLocaleString("es-AR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};

const productsFilePath = path.join(__dirname, "../data/products.json");
const productsJson = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const products = {
  list: (req, res) => {
    res.render("products/products", { products: productsJson });
  },
  detail: (req, res) => {
    let detalle = productsJson.find((prod) => prod.id == req.params.id);
    // if (detalle == null){
    // res.render("error");
    // }else{
    res.render("products/productDetail", { detalle });
    // }
  },
  cart: (req, res) => {
    res.render("products/productCart");
  },
  add: (req, res) => {
    res.render("products/productsAdd");
  },
  new: (req, res) => {
    let newProduct = {
      nombre: req.body.name,
      foto: req.body.picture,
      precio: req.body.price,
      marca: req.body.brand,
      descripcion: req.body.description,
      categoria: req.body.category,
    };
    res.redirect("/");
  },

  modification: (req, res) => {
    res.render("products/modificationListProducts");
  },

  // Edit products of modification list products - form to edit

  edit: (req, res) => {
    const productsJson = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const prodId = req.params.id;
    const product = productsJson.find((prod) => {
      return prod.id == prodId;
    });

    res.render("products/productAdd", { product, toThousand });
  },

  //Update products of modification list products - method to update

  update: (req, res) => {
    const productsJson = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const prodId = req.params.id;
    const product = productsJson.find((prod) => {
      return prod.id == prodId;
    });

    product.nombre = req.body.name;
    product.foto = req.body.picture;
    product.precio = req.body.price;
    product.marca = req.body.brand;
    product.descripcion = req.body.description;
    product.categoria = req.body.category;

    fs.writeFileSync(productsFilePath, JSON.stringify(products));

    res.render("products/modificationListProducts", { product, toThousand });
  },

  /*** Delete product of modification list products*/

  destroy: (req, res) => {
    const productsJson = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const productIndex = productsJson.findIndex((prod) => {
      return prod.id == req.params.id;
    });

    productsJson.splice(productIndex, 1);

    fs.writeFileSync(productsFilePath, JSON.stringify(productsJson));

    res.redirect("products/modificationListProducts");
  },
};

module.exports = products;
