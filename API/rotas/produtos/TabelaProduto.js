const Modelo = require('./ModeloTabelaProduto')

module.exports = {
    listar () {
        return Modelo.findAll()
    },

    inserir(produto){
        return Modelo.create(produto)
    },

    async pegarPorId(id){
        const encontrado = await Modelo.findOne({
            where: {
                id:id
            }
        })

        if(!encontrado){
            throw new Error('Produto não encontrado')
        }

        return encontrado
    },
    atualizar(id, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: {id: id}
            }
        )
    },

    remover(id){
       return Modelo.destroy({
           where : {id:id}
       })
    }
}