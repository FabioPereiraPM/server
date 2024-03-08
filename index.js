const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Pessoa = require('./models/Pessoa')

//Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    }));
    app.set('view engine', 'handlebars');
//Body-Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(express.json())
//Rotas

app.get('/', function(req, res){
    Pessoa.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })   
})

app.get('/cad', function(req, res){
    res.render('pessoas')
})

app.post('/add', function(req, res){
    Pessoa.create({
        nome: req.body.nome,
        email: req.body.email,
        data_de_nascimento: req.body.data_de_nascimento,
        telefone_com_ddd: req.body.telefone_com_ddd,
        endereço: req.body.endereço,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        tipo_de_pessoa: req.body.tipo_de_pessoa
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send(`Erro: ${erro}`)
    })
})

app.get('/deletar/:id', function(req, res){
    Pessoa.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Postagem  deletada!")
    }).catch(function(erro){
        res.send("Esta postagem não existe!")
    })
})

app.listen(3000, function(){
    console.log('Servidor rodando na url: http://localhost:3000 com a ajuda do express!')
})