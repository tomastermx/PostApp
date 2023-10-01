2


require('dotenv').config();


const config = {
 
    dbUser : process.env.SEQUELIZE_USER,
    dbPassword:process.env.SEQUELIZE_PASSWORD,
    dbHost: process.env.DB_HOST,
    sequelizeDB:process.env.SEQUELIZE_DB,
    dbPort:process.env.DB_PORT,
    sessionExrpress: process.env.SESSION_SECRET_WORD,
    googleIdClient:process.env.GOOGLE_CLIENT_ID,
    googleClientsecret:process.env.GOOGLE_CLIENT_SECRET,
    sessionsecretkey : process.env.EXPRESS_SESSION_SECRET_KEY
    
} 



module.exports = { config };
