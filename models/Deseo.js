const Sequelize = require("sequelize");
const dataBase = require("../config/database.js");

const Deseo = dataBase.define("deseo", {
  _id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  descripcion: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [3, 90],
        msg: "La descripcion debe tener entre 3 y 90 caracteres.",
      },
      notEmpty: {
        args: true,
        msg: "La descripcion no puede ir vacia",
      },
    },
  },

  user_email: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
});

module.exports = Deseo;
