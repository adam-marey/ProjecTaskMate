const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING // Remember to hash this before storing!
});

module.exports = User;
