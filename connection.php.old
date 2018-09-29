// 1 - Lib do Core
// 2 - Na pasta node_modules
// 3 - Procura nos seus arquivos
const express = require('express')

const app = express()

// URL, método, response
app.get('/', function (request, response) {
    response.send('Rota da home do sistema')
})

// Criar a rota de /produtos para ca :)
app.get('/produtos', function(req,res)  {
    res.send('Bla bla bla produtos')
})

const port = 3000
app.listen(port, function () { // Função anonima
    console.log(`
        Servidor subiu na porta ${port}
        Pressione CTRL+ C para derrubar
        http://localhost:${port}
    `) // Template String
})
