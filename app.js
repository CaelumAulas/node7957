// 1 - Lib do Core
// 2 - Na pasta node_modules
// 3 - Procura nos seus arquivos
const express = require('express')
const app = express()

// const rotaDaHome = require('./routes/home')
// console.log('O que tem nesse require: ', require('./routes/home'))
// rotaDaHome(app)
require('./routes/home')(app)
require('./routes/produtos')(app)

module.exports = app