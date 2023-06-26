const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'in_progress', 'done'],
    defaultValue: 'pending'
  }
});

module.exports = Task;
