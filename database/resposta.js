const sequelize = require( 'sequelize');

const conect =  require('./database.js');

const Respostas = conect.define('Resposta', {

    corpo: {
        
        type: sequelize.TEXT,
allowNull : false,

    },
    pergunta_id:{
        type:sequelize.INTEGER,
        allowNull:false

    }
})

Respostas.sync({force: false});

module.exports = Respostas;