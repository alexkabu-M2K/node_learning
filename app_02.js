// CommonJS 
// const funcao = require('./script')

// funcao(5, 10);

// import { somar } from './script.js';

// somar(2, 3);

//fs.readFile('./arquivo.txt', 'utf-8', (erro, data) => {
  //  if (erro) {
    //    console.log('Erro ao ler o arquivo:', erro);
      //  return;
    //}
    //console.log(`Conteudo do arquivo: ${data}`);

    //fs.writeFile('./arquivo_copia.txt', data, (erro) => {
      //  if (erro) {
        //    console.log('Erro ao escrever o arquivo:', erro);
          //  return;
        //}
        //    console.log('Arquivo copiado com sucesso!');
        //});
    //});

    fs.mkdir('C:/User/m2kmobilesolutions/Documents/novapasta', { recursive: true }, (erro) => {
    if (erro) {
        console.log('Erro ao criar a pasta:', erro);
        return;
    }
    console.log('Pasta criada com sucesso!');
});