"use strict";

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable("doctor_clinic_specialty", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doctorId: {
        type: Sequelize.INTEGER,
      },
      clinicId: {
        type: Sequelize.INTEGER,
      },
      specialtyId: {
        type: Sequelize.INTEGER,
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
    await QueryInterface.dropTable("doctor_clinic_specialty");
  },
};
