const app = require('./app')

const port = 3000
app.listen(port, function () { // Função anonima
    console.log(`
        Servidor subiu na porta ${port}
        Pressione CTRL+ C para derrubar
        http://localhost:${port}
    `) // Template String
})
