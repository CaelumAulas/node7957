// 1 - Lib do Core
// 2 - Na pasta node_modules
// 3 - Procura nos seus arquivos
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json())

app.use(express.static('./public')) // Arquivos Estáticos

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
// require('./routes/home')(app)
// require('./routes/produtos')(app)
const consign = require('consign');

consign()
    .include('./routes') // autoload das rotas
    .into(app)

// Page Not Found
app.use((req,res) => {
    res.status(404)
    res.send('Alo alo w brazil')
})

// Page fudeu tudo
// app.use((err, req, res, next) => {
//     res.status(500)
//     res.render('server/baleia.ejs')
// })

module.exports = app