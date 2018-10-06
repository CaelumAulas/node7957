const Joi = require('joi')
const produtoSchema = Joi.object().keys({
    titulo: Joi.string().required(),
    preco: Joi.number().required(),
    descricao: Joi.string().required()
})

class ProdutosController {
    constructor (produtosDAO) {
        console.log(produtosDAO)
        this.produtosDAO = produtosDAO
        this.novoProduto = this.novoProduto.bind(this)
    }
    formNovoProduto(req,res) {
        res.render('produtos/form.ejs')
    }

    novoProduto(req, res) {
        console.log('this', this)
        const produto = {         // Mapeando os dados exeternos para a aplicação // Data Transfer Object 
            titulo: req.body.titulo,
            preco: req.body.preco,
            descricao: req.body.descricao
        }
        // Validando os dados que vem do usuário
        const result = Joi.validate(produto, produtoSchema, {
            abortEarly: false
        })
        console.log(req.body)
        if(result.error) {
            res.status(400)
            res.format({
                html: () => {
                    res.render('produtos/form.ejs', {
                        errors: result.error.details
                    })
                }, 
                json: () => {
                    res.send(result.error)
                }
            })
            return;
        }
        console.log(this.produtosDAO)
        this.produtosDAO.adicionar(produto)
            .then(() => {
                res.redirect('/produtos')
            })
    }
    // migrar as funções que são chamadas dentro de ./routes/produtos.js
}

module.exports = ProdutosController