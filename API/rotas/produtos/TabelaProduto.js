const Modelo = require('./ModeloTabelaProduto')

module.exports = {
    listar () {
        return Modelo.findAll()
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
    atualizar(id, dados){
        return Modelo.update(
            dadosParaAtualizar,{
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