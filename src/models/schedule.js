"use strict";

const { Model, Sequelize, DataTypes } = require("sequelize");
module.exports = (Sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      // define associate here
    }
  }
  Schedule.init(
    {
      currentNumber: DataTypes.INTEGER,
      maxNumber: DataTypes.INTEGER,
      date: DataTypes.DATE,
      timeType: DataTypes.STRING,
      doctorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
