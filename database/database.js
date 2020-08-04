const Sequelize = require('sequelize');

const conection = new Sequelize('Perguntas', 'Coloque o seu usuario do banco de dados aqui', 'Coloque sua senha',{


    host: 'localhost',
    dialect: 'mysql',
    
});

module.exports = conection;