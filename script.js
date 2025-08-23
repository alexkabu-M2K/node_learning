// Módulos Node

// CommonJS

// export default somar;

// module.exports = somar


//export function somar(n1, n2) {
//    console.log (n1 + n2);
//};

const fs = require('fs');

fs.readFile('./arquivo.txt', 'utf-8', (erro, data) => {
    if (erro) {
        console.log('Erro ao ler o arquivo:', erro);
        return;
    }
    console.log(`Conteudo do arquivo: ${data}`);
});
