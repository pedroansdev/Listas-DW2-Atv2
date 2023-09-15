const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    const titulo = 'Inicio'
    
    res.render('index', {titulo: titulo})
})

app.post('/', (req, res)=>{
    const variaveis = 
    {   
        nome: req.body.nome, 
        idade: req.body.idade, 
        titulo: 'Bem-Vindo', 
        cs2: 'images/cs2.png', 
        tsLogo: 'images/tsLogo.png', 
        jsLogo: 'images/jsLogo.png'
    }

    res.render('bemvindo', variaveis)
})

app.listen(3000, function(erro){
    if(erro){
        console.log('Ocorreu um erro')
    } else{
        console.log('Servidor iniciado com sucesso!')
    }
})