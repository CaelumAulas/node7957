
module.exports = function(app) {
    const connectionFactory = require('../infra/connectionFactory')
    const connection = connectionFactory()

    const ProdutosDAO = require('../infra/ProdutosDAO')
    const produtosDAO = new ProdutosDAO(connection)

    const ProdutosController = require('../controllers/produtos')
    const produtosController = new ProdutosController(produtosDAO)
    // http://dontpad.com/js35
    app.get('/produtos/form', produtosController.formNovoProduto)
    app.post('/produtos', produtosController.novoProduto)    

    // Criar a rota de /produtos para ca :)
    app.get('/produtos', function(req,res, next)  {
        res.header('Access-Control-Allow-Origin', '*')

        const connectionFactory = require('../infra/connectionFactory')
        const connection = connectionFactory()
        const ProdutosDAO = require('../infra/ProdutosDAO')
        const produtosDAO = new ProdutosDAO(connection)
        // Pega todos os livros
        produtosDAO
            .pegaTodos() // Promises
            .then(function(result) {
                console.log('4 - "then" dentro do produtos.js')
                const livros = result
                res.format({
                    html: () => {
                        res.render('produtos/lista.ejs', { // View Model
                            livros: livros
                        })    
                    },
                    json: () => {
                        res.send({
                            livros: livros
                        })
                    }
                })
            })
            .catch(function(erro) {
                next(erro)
            })
    }) 

    app.get('/produtos/:id', function(request,response) {
        const id = request.params.id

        // const connection = require('../infra/connectionFactory')()
        const connectionFactory = require('../infra/connectionFactory')
        const connection = connectionFactory()
        // DAO = Data Access Object
        // Pega um livro por id
        const ProdutosDAO = require('../infra/ProdutosDAO')
        produtosDAO = new ProdutosDAO(connection)
        produtosDAO.pegaUmPorId(id, function(err, results) {
            response.send(results)
        })

    })

}




// Template String
        // <ol>
        //     ${livros.map(function(itemAtual) {
        //         return `<li>${itemAtual}</li>`
        //     }).join(' ')}
        // </ol>