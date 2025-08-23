// o Node.js não possui objetos do navegador (como document e window)

// JSON - JavaScript Object Notation ou Notação de Objetos em JavaScript

console.log('Hello World');

// Exemplo de objetos para JSON

// Modelo 01

const pessoa = {
    nome: "Alex Barbosa",
    idade: 30,
    saudar: () => {
        console.log(`Olá, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos.`);
    }
};

console.log(pessoa.saudar());

// Modelo 02

const person = {
    nome: "Alex Bessa",
    idade: 25,
    saudar: function() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

console.log(person.saudar());

// Transformar um objeto em JSON

const json = JSON.stringify(person);

console.log(json);

// Transformar JSON em objeto

const personObj = JSON.parse(json);
console.log(personObj);