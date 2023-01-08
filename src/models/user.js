"use strict";

const { Model, Sequelize, DataTypes } = require("sequelize");
module.exports = (Sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define associate here
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      roleid: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
