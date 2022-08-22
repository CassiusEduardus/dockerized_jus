const express = require('express');

const router = express.Router();

const controller = require('../controllers/creditCardController')

router.post('/', controller.post);

//Aqui já temos a implementação de um modulo que adiciona e retira cartões de crédito conforme solicitado pelo request criado pela aplicação.
//Atualmente apenas adiciona cartões de crédito.
//Modulos .post e .delete implementados e funcionais.

/*
router.put('/:id', controller.put);

router.get('/:id', controller.get);

router.delete('/:id', controller.delete);
*/

module.exports = router;