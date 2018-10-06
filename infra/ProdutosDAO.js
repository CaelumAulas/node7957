class ProdutosDAO {
    constructor(connection) {
        this.connection = connection
    }
    pegaTodos() {
        console.log('1 - pegaTodos()')
        // const connection = this.connection
        return new Promise((resolve, reject) => {
            console.log('2 - dentro do new Promise', this)
            this.connection.query('SELECT * FROM livros', function(err, result) {
                if(err) {
                    reject(err)
                }
                console.log('3 - Dentro do cb do banco')
                resolve(result)
            })
        })
    }
    pegaUmPorId(id, callback) {
        this.connection.query(`SELECT * FROM livros WHERE id = ${id}`, callback)
    }

    adicionar(produto) {
        return new Promise((resolve, reject) => {
            this.connection.query(`INSERT INTO livros SET ?`, produto, (err, result) => {
                if(err) reject(err)

                resolve(result)
            })
        })
    }
}
module.exports = ProdutosDAO

// module.exports = function(connection) {
//   return {
//     pegaTodos: function (callback) {
//         connection.query('SELECT * FROM livros', callback)
//     },
//     pegaUmPorId: function(id, callback) {
//         connection.query(`SELECT * FROM livros WHERE id = ${id}`, callback)
//     }
// }  
// } 
