const Sequelize = require('sequelize');

const conection = new Sequelize('Perguntas', 'zero3', 'onmargatesands',{


    host: 'localhost',
    dialect: 'mysql',
    
});

module.exports = conection;