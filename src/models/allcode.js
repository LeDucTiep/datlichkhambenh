"use strict";

const { Model, Sequelize, DataTypes } = require("sequelize");
module.exports = (Sequelize, DataTypes) => {
  class Allcode extends Model {
    static associate(models) {
      // define associate here
    }
  }
  Allcode.init(
    {
      key: DataTypes.STRING,
      type: DataTypes.STRING,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Allcode",
    }
  );
  return Allcode;
};
