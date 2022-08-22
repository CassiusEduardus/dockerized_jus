var SHA256 = require("crypto-js/sha256");
const express = require('express')

const filename = '/usr/app/resources/cards/available-cards.json'
const fs = require("fs");

// !! Para maior facilidade na compreensão do código todas funções são comentadas e seu workflow é explicado em cada função.

exports.post = (req, res, next) => {

    //
    //01 -  os campos são de preenchimento obrigatório. -- SOLVED
    //02 - Alguns cartões não possuem saldo ou contém formatação inválida. --  SOLVED
    //03 - Devemos sempre apresentar o feedback para usuário, em caso de erro ou sucesso. --SOLVED
    //

    //stringify transforma o objeto data_req em uma string compreensivel á aplicação.
    data_req = JSON.stringify(req.body);

    //Variavel independente para o JSON parseado.
    let aux_data_req = JSON.parse(data_req);

    //Campos de validação
    const validations = [
        "card_number",
        "card_month",
        "card_year",
        "card_cvv",
        "card_person_name"
    ];

    //!Todos os campos são de preenchimento obrigatório.
    const todosCamposEstaoPreenchidosCheck = (obj, fields) => {

        for (let field of fields) {
            if (!Array.isArray(field)) {
                if (obj?.[field] === undefined || obj?.[field] === null || obj?.[field] === '' || obj?.[field][0] === ' ')
                    return {
                        status: false,
                        message: `O campo ${field} é de preenchimento obrigatório.`
                    }
            }
        }
        return{
            status: true,
            message: "Todos os campos estão preenchidos!"
        }
    };
    //!Todos os campos são de preenchimento obrigatório.

    //Alguns cartões não possuem saldo ou contém formatação inválida.
    //SE O CARTÃO EXISTIR --- 1 == zero saldo, 2 == expirado, 3 == formatacao ?

    // Função para verificar se o cartão está no formato correto.
    // return true se o cartão estiver no formato correto.
    // return false se o cartão não estiver no formato correto.
    const ccNumberChecker = (cardNumbers) => {

        //Retira os espaços do cartão.
        let cardNumbersWithoutSpaces = cardNumbers.replace(/\s/g, '');
        
        //Regex para verificar se o cartão está no formato correto, considera espaços.
        let re = /^(?:[0-9]{16})$/;
        
        //Verifica se o cartão está no formato correto.
        let validate_regex = re.test(cardNumbersWithoutSpaces);
        
        //retorna true se o cartão estiver no formato correto.
        //retorna false se o cartão não estiver no formato correto.
        return validate_regex;
    };

    // Função para verificar se o mês está no formato correto.
    // return true se o mês estiver no formato correto.
    // return false se o mês não estiver no formato correto.
    const mmNumberChecker = (cardMonth) => {

        //Regex para verificar se o mês está no formato correto.
        return /^[0]*([1-9]|1[0-2])$/.test(cardMonth);
    };

    // Função para verificar se o ano está no formato correto.
    // return true se o ano estiver no formato correto.
    // return false se o ano não estiver no formato correto.
    const yyNumberChecker = (cardYear) => {

        //Regex para verificar se o ano está no formato correto.
        return /^20([2-9][0-9])$/.test(cardYear);
    };

    // Função para verificar se o cvv está no formato correto.
    // return true se o cvv estiver no formato correto.
    // return false se o cvv não estiver no formato correto.
    const cvvNumberChecker = (cardCvv) => {

        //Regex para verificar se o cvv está no formato correto.
        return /^([0-9]{3})$/.test(cardCvv);
    };

    // Função para verificar se o nome está no formato correto.
    // return true se o nome estiver no formato correto.
    // return false se o nome não estiver no formato correto.
    const nameChecker = (cardPersonName) => {

        //Regex para verificar se o nome está no formato correto.
        return /^([a-zA-Z]+)( ([a-zA-Z]+))$/.test(cardPersonName);
    };
    // -- segurança -- [verificar se o nome do cartão de credito possui mais de 64 caracteres ou menos de 1];

    //Função completa para ter um retorno oficial do preenchimento do cartão de credito.
    const ccCheck_parse = (obj, fields) => {

        let card_nn = obj.card_number;
        let card_mm = obj.card_month;
        let card_yy = obj.card_year;
        let card_cvv = obj.card_cvv;
        let card_person_name = obj.card_person_name;

        //Lógica de validação em cascata
        //Verifica se todos os campos estão preenchidos e validos.
        // FÁCILMENTE SUBSTITUIVEL com um switch case, if aninhado para princripios de compreensão de código.

        //Retorno conforme a resposta da validação.
        if (!ccNumberChecker(card_nn)) {
            
            return {
                "status": 1,
                "field": "card_number",
                "message": "O cartão de crédito não possui um número válido."
            }

        }
        else if (!mmNumberChecker(card_mm)) {
            
            return {
                "status": 2,
                "field": "card_month",
                "message": "O cartão de crédito não possui um mês válido."
            }

        }
        else if (!yyNumberChecker(card_yy)) {
            
            return {
                "status": 3,
                "field": "card_year",
                "message": "O cartão de crédito não possui um ano válido."
            }

        }
        else if (!cvvNumberChecker(card_cvv)) {

            return {
                "status": 4,
                "field": "card_cvv",
                "message": "O cartão de crédito não possui um código de segurança válido."
            }

        }
        else if (!nameChecker(card_person_name)) {
            
            return {
                "status": 5,
                "field": "card_person_name",
                "message": "O cartão de crédito não possui um nome válido."
            }

        }
        else
        {
            return {
                "status": 0,
                "fields": {
                    "card_nn": card_nn,
                    "card_mm": card_mm,
                    "card_yy": card_yy,
                    "card_cvv": card_cvv,
                    "card_person_name": card_person_name,
                    "message": ""
                }
            }

        }

    }

    //Função principal para::
    // -- verificar se o cartão existe no "banco de dados" JSON
    // -- verificar se o cartão está expirado
    // -- verificar se o cartão está com saldo
    // -- verificar se os dados estão corretos
    const cardInfoValuesCheck = (fields) => {

        //Leitura do banco de dados JSON
        let data_ = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
        
        //Conversão do JSON para objeto.
        let cards = JSON.parse(data_).data.cards;
        
        //Check se o cartão existe no banco de dados JSON.
        let card = cards.filter(card => card.number.toString() == fields.card_nn);
        
        //Retorno conforme a resposta da validação.
        if (card[0] == undefined) {
            return {
                "status": 1,
                "message": "O cartão de crédito não existe."
            }
        }
        else if (card[0].cvv != fields.card_cvv) {
            return {
                "status": 2,
                "message": "O código de segurança do cartão de crédito está incorreto."
            }
        }
        else if (card[0].expiration != (fields.card_mm + "/" + fields.card_yy)) {
            return {
                "status": 3,
                "message": "A data de expiração do cartão de crédito está incorreto."
            }
        }
        else {
            return {
                "status": 0,
                "message": "A detalhes do cartão de crédito estão corretos.",
                "brand": card[0].brand
            }
        }

    }

    //Função para retornar o saldo do cartão de credito.
    //Call da função considerada apenas após validação
    const saldoCartao = (cardNumber) => {

        //Pacote de retorno do saldo do cartão de credito.
        let ret = 0;

        //Leitura do banco de dados JSON
        let data = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
        
        //Conversão do JSON para objeto.
        let cards = JSON.parse(data).data.cards;

        //Check se o cartão existe no banco de dados JSON.
        let card = cards.filter(card => card.number.toString() == cardNumber);

        //Balance do cartão de credito sem tratamento de texto.
        if (card.length > 0) {

            ret = card[0].balance;

        }

        //Balance do cartão com tratamento de texto com uso de um regex usando '$' para formatação.
        if (card.length > 0) {

            //Regex usado para formatação do saldo do cartão de credito.
            //Usa '$' para encontrar o saldo na string não formatada d.
            regex_ret = /^.*(?<saldo>\$[0-9]+).*/.exec(card[0].description);

            //Formatação do pacote de retorno saldoCartao(), usa o status: x, como confirmação.
            if (regex_ret != null) {

                //Cartão existe e está com saldo, retorno será o saldo formatado com '$'.
                if (regex_ret.groups != null) {
                    
                    ret = {
                        status: 0,
                        message: card[0].description,
                        saldo: regex_ret.groups.saldo
                    }
                    
                }

            }
            else {
                //Cartão existe, mas não está com saldo, expirado.
                ret = {
                    status: 1,
                    message: card[0].description,
                    saldo: 0
                }

            }

        }

        //Retorna o pacote de retorno do saldo do cartão de credito.
        return ret;
    }

    // BEGIN -- Lógica principaL -- BEGIN

    //Validação dos campos do cartão de credito.
    let todos_campos_preenchidos = todosCamposEstaoPreenchidosCheck(aux_data_req, validations);

    //Caso os campos estejam preenchidos, verifica se os dados estão corretos.
    let todos_campos_validos = ccCheck_parse(aux_data_req, validations);

    //Variavel nula setada para uso como armazenamento de saldo do cartão de credito, caso exista.
    let saldo = null;

    //IF ELSE aninhado
    //TODAS RESPOSTAS CORRESPONDEM COM STATUS HTTP ex: 400, 401, 403, 404, 500...

    //Caso os campos estejam preenchidos, verifica se os dados estão corretos.
    if (todos_campos_preenchidos.status) {

        //Caso a resposta seja 0, os campos estão corretos.
        //Prosseguir para a validação do cartão de credito.
        if (todos_campos_validos.status == 0) {

            //Realizar a verificação dos campos do cartão de credito.
            info_check = cardInfoValuesCheck(todos_campos_validos.fields);
            
            //Caso a resposta seja 0, a validação ocorreu com sucesso.
            //Prosseguir com a verificação do saldo do cartão de credito.
            if (info_check.status == 0) {

                //Realizar a verificação do saldo do cartão de credito.
                saldo = saldoCartao(todos_campos_validos.fields.card_nn);
                
                //Caso a resposta seja 0, a validação ocorreu com sucesso e o cartão está com saldo.
                //Enviar a resposta correspondente;
                if (saldo.status == 0) {
                    res.status(200).send({
                        "status": 200,//200 - OK
                        "message": saldo.message,
                        "brand": info_check.brand,
                        "saldo": saldo.saldo
                    });
                }//Caso a resposta seja != 0, a validação ocorreu com sucesso porem o cartão está sem saldo.
                else {
                    res.status(200).json({
                        "status": 200,//200 - OK
                        "message": saldo.message,
                        "saldo": saldo.saldo
                    });
                }
            }
            else //A validação não ocorreu com sucesso 401 UNATHORIZED
            {
                res.status(401).send({
                    "status": 401,//unauthorized
                    "message": info_check.message,
                });
            }
        }
        //Caso a resposta seja != 0, os campos estão incorretos.
        //Retornar de acordo com o status da resposta.
        else {
            res.status(400).send(
                {
                    "status": 400,//400 - BAD REQUEST
                    "message": todos_campos_validos.message
                }
            );
        }

    }
    else {
        res.status(422).send({
            "status": 422,//422 - UNPROCESSABLE ENTITY
            "message": todos_campos_preenchidos.message
        });

    }
    // END -- Lógica principaL -- END

};

/*Implementação dos demais metodos não requeridos no teste para a API
// -- PUT
// -- DELETE
// -- GET

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição put recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição delete recebida com sucesso! ${id}`);
};

exports.get = (req, res, next) => {

    let id = req.params.id;

    fs.readFile(filename, function (err, data) {

        if (err) {
            //console.log(data);
            throw err;
        }

        cards = JSON.parse(data).data.cards;

        //console.log(id);

        card = cards.filter(card => SHA256(card.number).toString() == id);

        if (card.length > 0) {
            res.status(200).send(card[0]);
        }
        else
            res.status(404).send('Cartão não encontrado!');
    });
};
*/