const Sequelize = require('sequelize');

const conection = new Sequelize('Perguntas', '(Coloque o nome de usuario do seu banco de dados aqui)', '(coloque a sua senha aqui)',{


    host: 'localhost',
    dialect: 'mysql',
    
});

module.exports = conection;