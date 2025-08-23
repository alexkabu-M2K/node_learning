
fs.mkdir('C:/Users/m2kmo/Documents/novapasta', { recursive: true }, (erro) => {
    if (erro) {
        console.log('Erro ao criar a pasta:', erro);
        return;
    }
    console.log('Pasta criada com sucesso!');
});
//const fs = require('fs');
fs.writeFile('C:/Users/m2kmo/Documents/novapasta/arquivo.txt', 'Conteudo do arquivo', (erro) => {
    if (erro) {
        console.log('Erro ao escrever o arquivo:', erro);
        return;
    }
    console.log('Arquivo criado com sucesso!');
});

fs.readFile('C:/Users/m2kmo/Documents/novapasta/arquivo.txt', 'utf-8', (erro, data) => {
    if (erro) {
        console.log('Erro ao ler o arquivo:', erro);
        return;
    }
    console.log(`Conteudo do arquivo: ${data}`);
});