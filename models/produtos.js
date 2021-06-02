const conexao = require('../infraestrutura/conexao')

class Produtos{
    adiciona(produtos, res){
        const sql = 'INSERT INTO Produtos SET ?'

        const nameValido = produto.name.length >= 5
        
        const validacoes = [{ 
            nome : 'name',
            valido : nameValido,
            mensagem: 'O nome do produto é menor que 5 caracteres'
        }]
        
        const erros = validacoes.filter(campo => campo.valido)
        const existemErros = erros.length

        if (exitemErros){
            res.status(400).json(erro)
        } else{

        conexao.query(sql, produtos, (erro, resultados) =>{
            
            if (exitemErros){
                res.status(400).json(erro)
                
            }else {
                res.status(201).json(resultados)
            }
        })}
    }
    lista(res){
        const sql = 'SELECT * FROM Produtos'

        conexao.query(sql, (erro, resultados)=>{
            if (erro){
                res.status(400).json(erro)
                
            }else {
                res.status(200).json(resultados)
            }

        })
    }

    buscaPorcodProduct(codProduct, res){
        const sql = `SELECT * FROM Produtos WHERE codProduct=${codProduct}`

        conexao.query(sql, (erro, resultados)=>{
            const produtos = resultado[0]
            if (erro){
                res.status(400).json(erro)
                
            }else {
                res.status(200).json(produtos)
            }

        })
    }

    alterar(codProduct, price, res){
        const sql = `UPDATE Produtos SET ? WHERE codProduct=?`

        conexao.query(sql, [price, codProduct], (erro, resultados)=>{
            if (erro){
                res.status(400).json(erro)
                
            }else {
                res.status(200).json(resultados)
            }
        })

    }

}
module.exports = new Produtos