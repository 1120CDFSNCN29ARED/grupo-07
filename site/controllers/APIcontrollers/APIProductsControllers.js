const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = db.Sequelize;

/*MODELOS*/
const allProducts = db.Product;
//const allUsers = db.User;
//const carts = db.Cart;
//const category = db.category;

const APIProductsControllers = {
  /*listar productos*/
  productList: (req, res) => {
    allProducts
      .findAll()
      .then((products) => {
        return res.status(200).json({
          meta: {
            status: 200,
          },
          data: products,
        });
      })
      .catch(() => {
        return res.send(error);
      });
  },

  //res.status(201).json(req.body)   para crear desde postman
  /*   res.send({
         meta:{},
      data:
       })
      res.json();
      });*/

  /*detalle de productos*/
  detailProduct: (req, res) => {
    allProducts
      .findByPk(req.params.id)
      .then(() => {
        return res.status(200).json({
          total: productsDetail.lenght,
          data: productsDetail,
          status: 200,
        });
      })
      .catch(() => {
        return res.redirect("error");
      });
  },
};

module.exports = APIProductsControllers;
