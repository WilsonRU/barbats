Projeto de Stater Project com Express + Typescript utilizando o modelo de arquitetura Hexagonal

### Requisitos

-   [NodeJS](https://nodejs.org/en/)
-   [Typescript](https://www.typescriptlang.org/)
-   [TypeORM](https://typeorm.io/)
-   [Express](https://expressjs.com/pt-br/)

### Instalação

-   Instalando Pacotes
    `docker-compose up -d`

### Configurando o Projeto

-   Configure o `.env` utilizando o `env.example`

### Comandos de Desenvolvimento

-   Criando uma migration para banco de dados

    `docker-compose run --rm node yarn migrate:dev`

-   Executar TSLint

    `docker-compose run --rm node yarn lint`

-   Executar Tests

    `docker-compose run --rm node yarn test`

"Falta Implementar os Testes"
