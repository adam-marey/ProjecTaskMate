const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('Comment', {
  content: DataTypes.STRING
});

module.exports = Comment;
