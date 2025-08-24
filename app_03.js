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