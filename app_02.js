// CommonJS 
// const funcao = require('./script')

// funcao(5, 10);

// import { somar } from './script.js';

// somar(2, 3);

fs.readFile('./arquivo.txt', 'utf-8', (erro, data) => {
    if (erro) {
        console.log('Erro ao ler o arquivo:', erro);
        return;
    }
    console.log(`Conteudo do arquivo: ${data}`);

    fs.writeFile('./arquivo_copia.txt', data, (erro) => {
        if (erro) {
            console.log('Erro ao escrever o arquivo:', erro);
            return;
        }
            console.log('Arquivo copiado com sucesso!');
        });
    });