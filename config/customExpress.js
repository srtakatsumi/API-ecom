// configuracao

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')

module.exports = () => {

    //todas as configuracoes sao realizadas dentro desse arq
    const app = express()

    // bodyParser vai informar que qual formulario utilizar e validar a informacao
    app.use(bodyParser.urlencoded({entended : true}))
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}
