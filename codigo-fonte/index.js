const Express = require('express');
const App = new Express();

App.get('/', (RequisicaoCliente, RespostaServidor) => RespostaServidor.send("Hello World"));

App.listen(1234,() => {
    console.log(`Servidor Rodando `)
});
