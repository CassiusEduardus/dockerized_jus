// BEGIN -- Inicializações -- BEGIN
const express = require('express');

const app = express();

const router = express.Router();

var bodyParser = require('body-parser')
// END -- Inicializações -- END

//Adicionando o bodyParser para o app podemos suportar pedididos JSON.
app.use(bodyParser.json());

//Adicionando o bodyParser para o app podemos suportar pedididos URLENCODED.
app.use(bodyParser.urlencoded({ extended: false })); 

//Roteamento dos pedidos para a page index, resposta será padrão [200].
const index = require('./routes/index');


// Controlador de cartões de crédito iniciado, resposta será conforme a lógica requerida pelo desafio determinar.
const creditCardController = require('./routes/creditCardRoute');

// Retornaremos a resposta padrão para todos os pedidos. "Jusbr API -- Resposta Request GET_PADRAO"
app.use('/', index);

// Inicio do workflow da aplicação.
// -- Verificação de campos de preechimento obrigatório -- //
// -- Verificação de saldo do cartão de crédito -- //
// -- Verificação de formatação do cartão de crédito -- //
app.use('/credit-cards', creditCardController);

module.exports = app;