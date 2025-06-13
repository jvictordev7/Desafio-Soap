# 🧮 Desafio SOAP - Calculadora Node.js

Este projeto foi desenvolvido como parte do desafio da disciplina de Programação, Unilavras, com o objetivo de consumir um serviço SOAP de calculadora utilizando Node.js. O sistema permite realizar operações matemáticas básicas (adição, subtração, multiplicação e divisão) de duas formas: síncrona e assíncrona.

---

## 📋 Descrição

A aplicação consome o serviço SOAP disponível em:  
[http://www.dneonline.com/calculator.asmx?WSDL](http://www.dneonline.com/calculator.asmx?WSDL)

O usuário pode escolher entre dois modos de execução:
- **Síncrono:** Utilizando callbacks (`calculator_sync.js`)
- **Assíncrono:** Utilizando async/await (`calculator_async.js`)

A interface principal (`index.js`) oferece um menu interativo no terminal, com cores e emojis para facilitar a experiência do usuário.

---

## 🚀 Como Executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Execute a aplicação principal

```bash
npm start
```

Siga as instruções no terminal para escolher o modo, inserir os números e a operação desejada.

---

### 3. Executar diretamente os modos

Você também pode executar diretamente os arquivos de cada modo:

#### Síncrono

```bash
node calculator_sync.js <num1> <num2> <operacao>
```
Exemplo:
```bash
node calculator_sync.js 10 5 adicionar
```

#### Assíncrono

```bash
node calculator_async.js <num1> <num2> <operacao>
```
Exemplo:
```bash
node calculator_async.js 10 5 dividir
```

---

## ⚙️ Operações Suportadas

- `adicionar` ➕
- `subtrair` ➖
- `multiplicar` ✖️
- `dividir` ➗

---

## 🗂️ Estrutura dos Arquivos

- `index.js` - Interface principal, menu interativo para escolha do modo e operação.
- `calculator_sync.js` - Implementação síncrona (callback) do consumo SOAP.
- `calculator_async.js` - Implementação assíncrona (async/await) do consumo SOAP.
- `package.json` - Dependências e scripts do projeto.
- `README.md` - Este arquivo.

---

## 💡 Exemplos de Uso

### Usando o menu interativo

```bash
npm start
```
- Escolha o modo (1 ou 2)
- Digite os dois números inteiros
- Escolha a operação (adicionar, subtrair, multiplicar, dividir)

### Usando linha de comando

```bash
node calculator_sync.js 7 3 multiplicar
node calculator_async.js 15 5 dividir
```

---

## 👨‍💻 Autor

João Victor 
Unilavras

---
