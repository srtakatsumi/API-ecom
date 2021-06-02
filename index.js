//inicia o sistema
const customExpress = require("./config/customExpress")
const conexao = require('./infraestrutura/conexao')
const Tabelas = require("./infraestrutura/rabelas")

//dentro do connect sera passada uma funcao para devolver essa funcao
conexao.connect(erro=>{
    if (erro){
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        //importa o banco de dados
        Tabelas.init(conexao)
        // so vai executar a info abaixo se nao der erro 
        const app = customExpress()

        app.listen(3000, () => console. log('Servidor rodando na porta 3000'))
    }
})



