const dbConfig = require('../db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.user, dbConfig.password,{
    dialect: dbConfig.dialect,
    host: dbConfig.host
})


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('../models/tutorial.model')(sequelize, Sequelize);

module.exports = db;
