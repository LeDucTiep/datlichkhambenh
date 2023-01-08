"use strict";

const { Model, Sequelize, DataTypes } = require("sequelize");
module.exports = (Sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      // define associate here
    }
  }
  Specialty.init(
    {
      imge: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Specialty",
    }
  );
  return Specialty;
};
