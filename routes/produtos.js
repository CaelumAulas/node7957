module.exports = function(app) {
    // Criar a rota de /produtos para ca :)
    app.get('/produtos', function(req,res)  {
        // Esses produtos tem que vir do banco de dados
        // const livros = [
        //     'Livro NodeJS',
        //     'Livro Angular',
        //     'Livro Ruby'
        // ]
        const mysql = require('mysql')
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodego'
        })

        connection.query('SELECT * FROM livros;', function(err, results) {
            res.send(results)
            // console.log('livros:',livros)
            // res.render('produtos/lista.ejs', { // View Model
            //     livros: livros
            // })
        })

    }) 
}




// Template String
        // <ol>
        //     ${livros.map(function(itemAtual) {
        //         return `<li>${itemAtual}</li>`
        //     }).join(' ')}
        // </ol>