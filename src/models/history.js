"use strict";

const { Model, Sequelize, DataTypes } = require("sequelize");
module.exports = (Sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) {
      // define associate here
    }
  }
  History.init(
    {
      patientId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
