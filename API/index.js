// comece com npm init -y para iniciar
// criar uma pasta api/index.js
// para o código rodar instalar as bibliotecas abaixo
// npm install express body-parser sequelize mysql2 config

// para fazer funcionar vamos utilizar o seguinte comando no terminal
// node index.js e vai retornar se deu algum problema se não vai exibir a mensagem

//no postman vamos colocar localhost e o numero da porta escolhido
// dessa forma localhost:8888

// para para de rodar a api utilize o comando ctrl+c


// vamos utilizar express para criar uma api
const express = require('express')
//instacia para criar a aplicação
const app = express()

// como vamos utilizar dados no formato json, iremos chamar a biblioteca body-parser que instalamos
const bodyParser = require('body-parser')
const config = require('config')



app.use(bodyParser.json())


const roteador = require('./rotas/produtos')
app.use('/api/produtos', roteador)

//para fazer a aplicação funcionar ela tem que escutar uma porta 
// o metodo aceita dois parametros : num da porta - vamos exibir uma mensagem para avisar que a API está funcionando
app.listen(config.get('api.porta'), () => console.log('A API está funcionando!'))