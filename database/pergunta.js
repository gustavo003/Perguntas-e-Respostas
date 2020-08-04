const sequelize = require( 'sequelize');

const conect =  require('./database.js');
const Pergunta = conect.define('pergunta'

,{titulo:{

    type:sequelize.STRING,
    allowNull: false

},

description:{
    type: sequelize.TEXT,
    allowNull:false
}
},{}

)

Pergunta.sync({force:false});

module.exports=Pergunta;