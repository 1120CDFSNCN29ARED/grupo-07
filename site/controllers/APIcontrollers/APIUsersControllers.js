const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = db.Sequelize;

/*MODELOS*/

//const allUsers = db.User;

//const APIProductsControllers = {
/*lista de usuarios

  userList: (req, res) => {
      allUsers.count().then((users =>{
          return res.status(200).json({
              meta:{
                  status: 200,
                  total: users.lenght,
                  url:"api/users/:id",
              },
              data: users,
              })
                    .catch(() => {
        return res.send(error);
      })
    }
},
}

userDetail: (req, res) => {}*/
