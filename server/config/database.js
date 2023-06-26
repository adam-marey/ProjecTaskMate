const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/ProjecTaskMate',
  {
    logging: false
  }
);

module.exports = sequelize;
