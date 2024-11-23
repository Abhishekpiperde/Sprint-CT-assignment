const { DataTypes } = require("sequelize");
const sequelize = require("../../Practice/Spring assignment/config/dbConfig");

// Define Company Model
const Company = sequelize.define("Company", {
  name: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Company;