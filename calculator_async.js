const soap = require('soap');

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const args = process.argv.slice(2);

async function operation(url, intA, intB, op) {
  try {
    const client = await soap.createClientAsync(url);

    const operations = {
      adicionar: 'AddAsync',
      subtrair: 'SubtractAsync',
      multiplicar: 'MultiplyAsync',
      dividir: 'DivideAsync'
    };

    const method = operations[op];

    if (!method || !client[method]) {
      console.log('Operação inválida. Use: adicionar, subtrair, multiplicar, dividir');
      return;
    }

    const [result] = await client[method]({ intA, intB });
    const resultKey = Object.keys(result)[0];
    console.log(`Resultado (${op}):`, result[resultKey]);
  } catch (err) {
    console.error('Erro:', err);
  }
}

operation(url, parseInt(args[0]), parseInt(args[1]), args[2]);
