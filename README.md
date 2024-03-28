Este é um mini framework para criar APIs RESTful usando TypeScript, TypeORM e Express. Ele fornece uma estrutura básica e pré-configurada para desenvolver APIs de forma eficiente e organizada.

### Instalação

-   Clone esse repositorio
-   Suba o container `docker-compose up -d`

### Configurando o Projeto

-   Configure o `.env` utilizando o `env.example`

### Comandos de Desenvolvimento

-   Caso precise adicionar algum pacote utilize o

    `docker-compose run --rm node yarn add <pacote>`

-   Criando uma migration para banco de dados

    `docker-compose run --rm node yarn migrate:dev`

-   Executar TSLint

    `docker-compose run --rm node yarn lint`

    `docker-compose run --rm node yarn lint:fix`

-   Executar Tests

    `docker-compose run --rm node yarn test`

### Estrutura do Projeto

-   `src/`: Este é o diretório raiz para o seu código-fonte.
    -   `app/`: Este diretório provavelmente contém a lógica principal da aplicação.
    -   `migrations/`: Este diretório poderia conter scripts de migração de banco de dados.
    -   `middlewares/`: Middlewares usados na sua aplicação.
    -   `shared/`: Arquivos ou módulos utilitários compartilhados.
        -   `Express/`, `Http/`, `Interfaces/`, `Util/`: Esses subdiretórios dentro de `shared/` sugerem a organização de diferentes módulos utilitários.
    -   `data-source.ts`: Um arquivo TypeScript contendo a lógica da fonte de dados.
-   `app.ts`: O ponto de entrada da sua aplicação.
-   `env`: Esses são arquivos de configuração de ambiente. Geralmente, o `env.example` contém valores de configuração de exemplo.
-   `.gitignore`: Um arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo controle de versão do Git.
-   `package.json`: O arquivo de configuração de pacotes do Node.js, contendo dependências e informações do projeto.
-   `.eslint.json`: Configuração para o ESLint, uma ferramenta usada para linting de código.
-   `tslint.json`: Configuração para o TSLint, outra ferramenta para linting de código TypeScript.
-   `jest.config.ts`: Configuração para o Jest, um framework de testes.
-   `.prettierrc.json`: Configuração para o Prettier, uma ferramenta de formatação de código.
-   `.editorconfig`: Configuração para as configurações do editor de código, como indentação, quebra de linha, etc.
-   `tsconfig.json`: Configuração para as opções de compilação do TypeScript.

### Referências

-   [NodeJS](https://nodejs.org/en/)
-   [Typescript](https://www.typescriptlang.org/)
-   [TypeORM](https://typeorm.io/)
-   [Express](https://expressjs.com/pt-br/)
-   [Arquitetura Hexagonal](https://engsoftmoderna.info/artigos/arquitetura-hexagonal.html)
-   [Docker](https://www.docker.com/)

### Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, abra uma issue ou envie um pull request.
