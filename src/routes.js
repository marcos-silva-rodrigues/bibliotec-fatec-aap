const express = require('express')
const routes = express.Router()


const pagesController = require('./controllers/pagesController') 

routes
    .get('/Home', pagesController.home) 
    .get('/Entrar', pagesController.entrar)
    .get('/Livro', pagesController.livro)
    .post('/Login', pagesController.login)
    .get('/Erro', pagesController.erro) 

    .get('/HomeLogado', pagesController.homeLogado) 
    .get('/Conta', pagesController.conta)
    .get('/Historico', pagesController.historico) 
    .get('/Donate', pagesController.donate)   
    
module.exports = routes