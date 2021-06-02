// contralar as rotas quando acessadas
const produtos = require('../models/produtos')
const Produtos = require('../models/produtos')
module.exports = app => 
{
    //o get sera utilizado para mandar dados aos clientes
    app.get('/produtos', (req, res) => { 
        produtos.lista(res)
     })

     app.get('/produtos/:codProduct',(req,res) =>{
         // para converter o resultado do codProduct para inteiro 
         // pois quando a tabela foi criada foi inserido como INT
         const codProduct = parseInt(req.params.codProduct)

         Produtos.buscaPorcodProduto(codProduct, res)
         res.send('OK')
     })

    app.post('./produtos', (req, res) =>
    {
        const produtos = req.body

        Produtos.adiciona(produtos, res)
        
    })

    app.patch('/produtos/:codProduct', (req, res) => {
        const codProduct = parseInt(res.params.codProduct)
        const price = req.body

        Produtos.alterar(codProduct,price,res)


    })
}