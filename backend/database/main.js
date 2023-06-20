const { Logger } = require('sass');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('messanger_db', 'postgres', '31415',
    {
        host: 'localhost',
        dialect: 'postgres'
    },
)

module.exports.connectDB = async function connectDB() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });
        console.log('Connection has been established successfully.');
    } catch (error) {
      console.log('Unable to connect to the database: ', error);  
    }
}

module.exports.sequelize = sequelize;