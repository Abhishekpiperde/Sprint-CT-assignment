const sequelize = require("../../Practice/Spring assignment/config/dbConfig");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;
