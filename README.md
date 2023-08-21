Este é um mini framework para criar APIs RESTful usando TypeScript, TypeORM e Express. Ele fornece uma estrutura básica e pré-configurada para desenvolver APIs de forma eficiente e organizada.

### Requisitos de Instalação

-   [Docker](https://www.docker.com/)

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

|-- src/
| |-- app/
| |-- migrations/
| |-- middlewares/
| |-- shared/
| | |-- Express/
| | |-- Http/
| | |-- Interfaces/
| | |-- Util/
| |-- data-source.ts
|-- app.ts
|-- env
|-- env.example
|-- .gitignore
|-- package.json
|-- .eslint.json
|-- tslint.json
|-- jest.config.ts
|-- .prettierrc.json
|-- .editorconfig
|-- tsconfig.json

- **`src/app/`**: Contém todo mu da API.
- **`src/middlewares/`**: Contém middlewares personalizados.
- **`src/shared/`**: Contém utilitário personalizados.

### Referências

-   [NodeJS](https://nodejs.org/en/)
-   [Typescript](https://www.typescriptlang.org/)
-   [TypeORM](https://typeorm.io/)
-   [Express](https://expressjs.com/pt-br/)
-   [Arquitetura Hexagonal](https://engsoftmoderna.info/artigos/arquitetura-hexagonal.html)

### Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, abra uma issue ou envie um pull request.
