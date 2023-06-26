const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
  name: DataTypes.STRING,
  description: DataTypes.STRING
});

module.exports = Project;
