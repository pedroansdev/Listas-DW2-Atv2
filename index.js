const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.render('index')
})

app.post('/', (req, res)=>{
    const nome = req.body.nome
    const idade = req.body.idade

    res.render('bemvindo', {nome: nome, idade: idade})
})

app.listen(3000, function(erro){
    if(erro){
        console.log('Ocorreu um erro')
    } else{
        console.log('Servidor iniciado com sucesso!')
    }
})