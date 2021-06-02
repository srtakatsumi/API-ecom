class Tabelas{
    init(conexao){
        this.conexao =conexao    
        this.criarProdutos()    
    }
    criarProdutos(){
        //Comando para criar uma tabela no sql e caso ja exista para que nao tenha duplicidade
        //utilizar o IS NOT EXISTS se a tabela ja foi criada ela nao vai ser criada novamente
        const sql = `CREATE TABLE IF NOT EXISTS Produtos(codProduct int NOT NULL AUTO_INCREMENT,name varchar(100) NOT NULL, price float NOT NULL, stockQuantity int NOT NULL, available int NOT NULL, highlighted int NOT NULL, idDepartment int NOT NULL )`


        this.conexao.query(sql, erro => {
            if (erro){
            console.log(erro)
            } else {
                console.log('Tabela de produto criada com sucesso')
            }
        } )
    }
}

module.exports = new Tabelas