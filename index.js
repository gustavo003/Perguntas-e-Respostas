const express = require('express');
const bodyParser = require('body-parser');
const conect = require('./database/database');
const Pergunta = require('./database/pergunta');
const Resposta = require('./database/resposta');




const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));


conect.authenticate().then(()=>console.log("Conexão feita com sucesso")).catch(
    (error)=>console.log(error)
)



app.get('/', function(req, res){

Pergunta.findAll({raw:true, order:[['id', 'DESC']]}).then(function(perguntas){

    res.render('index', {perguntas:perguntas});
});


})

app.get('/perguntar', function(req, res){
res.render('perguntar');

})

app.get('/pergunta/:id', function(req, res){

    var id = req.params.id;

    Pergunta.findOne({where:{id:id}}).then(function(pergunta){

        if(pergunta!=undefined){
Resposta.findAll({where:{pergunta_id:id}}).then((resposta)=>res.render('pergunta', {pergunta:pergunta, resposta:resposta})
)
        }else{
            res.redirect('/')
        }
    });


})


app.post('/salvar_resposta', function(req, res){
var corpo = req.body.corpo;
var perguntaid = req.body.pergunta;


   Resposta.create({
corpo:corpo,
pergunta_id:perguntaid

    }).then(()=>res.redirect('/pergunta/'+ perguntaid));
})


app.post('/salvar', function(req,res){


Pergunta.create(
    {
        titulo:req.body.titulo,
        description:req.body.descricao
    }
).then(()=>res.redirect('/'));
})

app.listen(8080)