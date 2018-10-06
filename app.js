// 1 - Lib do Core
// 2 - Na pasta node_modules
// 3 - Procura nos seus arquivos
const express = require('express')
const app = express()

// Arquivos Estáticos
app.use(express.static('./public'))
// app.use(function(req,res) {
//     const listaDeArquivos = varreDiretorio
//     listaDeArquivos.forEach(function(file) {
//         res.sendFile(file)
//     })
// })
// app.get('/css/bootstrap.min.css', function(re,res) {
// })

// const rotaDaHome = require('./routes/home')
// console.log('O que tem nesse require: ', require('./routes/home'))
// rotaDaHome(app)
require('./routes/home')(app)
require('./routes/produtos')(app)

module.exports = app