const express = require('express');
const server = express();
const routes = require('./routes');

server
//utilizar body do req
.use(express.urlencoded({ extended: true }))
//configurando arquivos estáticos
.use(express.static('public'))

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})
server.use(routes)

server.listen(5000);