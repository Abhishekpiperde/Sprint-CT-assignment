const sequelize = require("../../Practice/Spring assignment/config/dbConfig");
const { DataTypes } = require("sequelize");
const User = require("./User");
const Company = require("./Company");

// // Define Company Model
// const Company = sequelize.define("Company", {
//   name: { type: DataTypes.STRING, allowNull: false },
//   city: { type: DataTypes.STRING, allowNull: false },
// });

// Define User Model
// const User = sequelize.define("User", {
//   name: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, unique: true, allowNull: false },
//   phone: { type: DataTypes.STRING, allowNull: false },
// });

// Define UserCompanies for Many-to-Many relationship
const UserCompanies = sequelize.define("UserCompanies", {});

User.belongsToMany(Company, { through: UserCompanies });
Company.belongsToMany(User, { through: UserCompanies });

module.exports = { sequelize, Company, User, UserCompanies };
