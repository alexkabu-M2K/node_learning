
// O Node.js não possui objetos do navegador (window, document, etc.)

// JSON

// // 'this' no contexto de funções como métodos de objetos
// const pessoa = {
//   nome: "Alex",
//   idade: 29,
//   saudar: function(){
//     console.log(`Olá ${this.nome}!`);
//   }
// };

// console.log(pessoa.saudar());


// const pessoa = {
//   nome: "Alex",
//   idade: 29,
//   saudar: function(){
//     console.log(`Olá ${this.nome}!`);
//   }
// };

// // tranformar um objeto em json
// const json = JSON.stringify(pessoa);
// console.log(json);

// // tranformar um json em objeto
// const novaPessoa = JSON.parse(json);
// console.log(novaPessoa);

// // CommonJS
// const funcao = require('./script');

// funcao(2, 3);

// // EcmaScript Modules
// import {somar} from './script.js';

// somar(2, 3);

const fs = require('fs');

// // ler arquivo
// fs.readFile('C:/Users/alexbessadaniel/Documents/arquivo.txt', 'utf-8', (erro, dado) => {
//   if(erro){
//     console.error(`Erro ao ler arquivo: ${erro}`);
//     return;
//   }

//   console.log(`Conteúdo do arquivo: ${dado}`);

// });

// criar arquivo
// fs.writeFile('C:/Users/alexbessadaniel/Documents/outroArquivo.txt', 'Oi, de novo!', 'utf-8', (erro) => {
//   if(erro){
//     console.error(`Erro ao criar arquivo: ${erro}`);
//     return;
//   };

//   console.log(`Arquivo criado com sucesso!`);
// });

// // criar diretório
// fs.mkdir('C:/Users/alexbessadaniel/Documents/minha-pasta', {recursive: true}, (erro) => {
//   if(erro){
//     console.error(`Erro ao criar diretório: ${erro}`);
//     return;
//   };

//   console.log(`Diretório criado com sucesso!`);
// });

function executar() {
  fs.mkdir('C:/Users/m2kmo/Documents/app', { recursive: true }, (erro) => {
    if (erro) {
      console.error(`Erro ao criar diretório: ${erro}`);
      return;
    };

    console.log(`Diretório criado com sucesso!`);
  });

  fs.writeFile('C:/Users/m2kmo/Documents/app/arquivo.txt', 'Hello!', 'utf-8', (erro) => {
    if (erro) {
      console.error(`Erro ao criar arquivo: ${erro}`);
      return;
    };

    console.log(`Arquivo criado com sucesso!`);

    fs.readFile('C:/Users/m2kmo/Documents/app/arquivo.txt', 'utf-8', (erro, dado) => {
      if (erro) {
        console.error(`Erro ao ler arquivo: ${erro}`);
        return;
      }

      console.log(`Conteúdo do arquivo: ${dado}`);

    });
  });


}

executar();