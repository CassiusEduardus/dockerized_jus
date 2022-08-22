//Require de nossas rotas e bibliotecas.
const app = require('../src/app');

//Devemos APENAS operar na porta que foi definida no arquivo de configuração, realizando um check para verificar se a porta está corretamente definida.
const port = normalizaPort(process.env.PORT || '3050');

//Simples normalização de porta, mais uma etapa de verificação para garantir a funcionalidade da API.
function normalizaPort(val)
{
    const port = parseInt(val, 10);
    
    if (isNaN(port))
    {
        return val;
    }

    if (port >= 0)
    {
        return port;
    }

    return false;
}

app.listen(port, function()
{
    //console.log('API iniciada na porta: ' + port);
    console.log(`API iniciada na porta: ${port}`);
})