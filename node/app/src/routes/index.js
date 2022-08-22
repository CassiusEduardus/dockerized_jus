const express = require('express');

const router = express.Router();

//Router para resposta padrão.
router.get('/', function(req, res, next)
{
	//Resposta padrão
	res.status(200).send(
	{
		title: "Jusbr API -- Resposta Request GET_PADRAO",
		version: "0.0.1"
	});
    
});

module.exports = router;