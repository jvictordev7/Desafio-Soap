const readline = require('readline');
const { exec } = require('child_process');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();
console.log(
  chalk.bgBlue(
    chalk.white.bold('\n=== 🧮 CALCULADORA SOAP ===\n')
  )
);
console.log(chalk.yellow('Escolha o modo de execução:'));
console.log(chalk.green('1') + chalk.white(' - Síncrono (sync) ⚡'));
console.log(chalk.green('2') + chalk.white(' - Assíncrono (async) 🔄'));
console.log('');

rl.question(chalk.cyan('Digite 1 ou 2: '), (modo) => {
  rl.question(chalk.cyan('Digite o primeiro número 🔢: '), (num1) => {
    rl.question(chalk.cyan('Digite o segundo número 🔢: '), (num2) => {
      rl.question(
        chalk.cyan('Digite a operação ') +
        chalk.magenta('(adicionar , subtrair , multiplicar , dividir ): '),
        (operacao) => {
          const file = modo === '1' ? 'calculator_sync.js' : 'calculator_async.js';

          const comando = `node ${file} ${num1} ${num2} ${operacao}`;
          console.log(chalk.gray('\nExecutando: ') + chalk.yellow(comando) + ' 🚀\n');

          exec(comando, (err, stdout, stderr) => {
            if (err) {
              console.error(
                chalk.bgRed(
                  chalk.white.bold(`\n❌ Erro ao executar: ${err.message}\n`)
                )
              );
            }
            if (stderr) {
              console.error(chalk.red(`stderr: ${stderr}`));
            }
            if (stdout) {
              console.log(
                chalk.bgGreen(
                  chalk.black.bold('\n✅ Resultado:\n')
                ) +
                chalk.green.bold(stdout)
              );
            }
            rl.close();
          });
        }
      );
    });
  });
});