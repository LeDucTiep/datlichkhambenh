"use strict";

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable("clinics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      image: {
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
    await QueryInterface.dropTable("clinics");
  },
};
