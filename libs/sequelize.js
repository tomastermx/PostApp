


const { Sequelize } = require('sequelize');
const { config }  = require('../config');
const setupModels = require('../models/index');




const USER  = encodeURI(config.dbUser);
const PASSWORD = encodeURI(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.sequelizeDB}`;

   const sequelize = new Sequelize(URI,{
      
        dialect: 'postgres',
        logging:true,
});

setupModels(sequelize);

sequelize.sync();
     
        
        

  module.exports = sequelize;