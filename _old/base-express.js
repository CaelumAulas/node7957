// libs do core do node
const http = require('http')
function lidaComRequests(request, response) {
    // Criar o gerenciador de livros da casa do códego
    const metodos = []
    const rotasGET = []
    // URL // reponse
    rotasGET['/'] = function(request,response) {
        response.end(`<h1>Home ${request.method}</h1>`)
    }
    rotasGET['/produtos'] = `<h1>Produtos</h1>`

    metodos['GET'] = rotasGET

    if(rotas[request.url] !== undefined) {
        response.end(metodos[request.method][request.url](request,response))
    } else {
        response.writeHead(404)
        response.end('Vc caiu na rota 404')
    }


    // - Home da vida [GET]
    // if(request.url === '/') {
    //     response.end(`<h1>Home</h1>`)
    //     return
    // }
    // // - Listar os livros [GET]
    // if(request.url === '/produtos') {
    //     response.end('<h1>Listagem de Livros</h1>')
    //     return
    // }
}
var server = http.createServer(lidaComRequests) // CallBack

const port = 3000
function retornoDeSubirOServidor() {
    console.log(`
        Servidor subiu na porta ${port}
        Pressione CTRL+ C para derrubar
        http://localhost:${port}
    `) // Template String

}
server.listen(port, retornoDeSubirOServidor)

