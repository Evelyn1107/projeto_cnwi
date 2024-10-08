const express = require('express')
const server = express()
const bodyParser = require('body-parser')
//Importar para ter acesso ao caminho dos arquivos
const path = require('path')
//Expor arquivos estáticos..
server.use(express.static('trabalho3'));
server.use(express.json()) //Possibilidade de usar JSON

server.use(bodyParser.urlencoded({ extended: true }))

//EXemplo GET
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'trabalho3/index.html'))
})
server.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'trabalho3/cadastro.html'))
   
})
server.get('/informacoes', (req, res) => {
    res.sendFile(path.join(__dirname, 'trabalho3/informacoes.html'))
})
//Middleware para rotas não encontradas!
server.use(function (req, res, next) {
    console.log('aqui');
    return res.sendFile(path.join(__dirname, 'views/404.html'))
})

server.listen(3000, () => {
    console.log("servidor no ar...")
})