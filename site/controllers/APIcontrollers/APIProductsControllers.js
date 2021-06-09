const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = db.Sequelize;

/*MODELOS*/
const allProducts = db.Product;

const APIProductsControllers = {
  /*listar productos*/
  productList: (req, res) => {
    allProducts
      .findAll()
      .then((products) => {
        return res.status(200).json({
          meta: {
            status: 200,
            total: products.lenght,
            url: "api/products/:id",
          },
          data: products,
        });
      })
      .catch(() => {
        return res.send(error);
      });
  },

  /*detalle de productos*/
  detailProduct: (req, res) => {
    allProducts
      .findByPk(req.params.id)
      .then(() => {
        return res.status(200).json({
          meta: {
            status: 200,
            //url: "api/products/",
          },
          data: productsDetail,
        });
      })
      .catch(() => {
        return res.redirect("error");
      });
  },
};

module.exports = APIProductsControllers;
