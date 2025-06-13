const soap = require('soap');

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const args = process.argv.slice(2);

function operation(url, intA, intB, op) {
  soap.createClient(url, (err, client) => {
    if (err) return console.error('Erro ao criar cliente SOAP:', err);

    const operations = {
      adicionar: 'Add',
      subtrair: 'Subtract',
      multiplicar: 'Multiply',
      dividir: 'Divide'
    };

    const method = operations[op];

    if (!method) {
      console.log('Operação inválida. Use: adicionar, subtrair, multiplicar, dividir');
      return;
    }

    client[method]({ intA, intB }, (err, result) => {
      if (err) return console.error('Erro na operação:', err);
      console.log(`Resultado (${op}):`, result[`${method}Result`]);
    });
  });
}

operation(url, parseInt(args[0]), parseInt(args[1]), args[2]);
