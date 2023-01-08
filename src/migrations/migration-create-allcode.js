"use strict";

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable("allcode", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      key: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      valueEn: {
        type: Sequelize.STRING,
      },
      valueVi: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (QueryInterface, Sequelize) => {
    await QueryInterface.dropTable("allcode");
  },
};
