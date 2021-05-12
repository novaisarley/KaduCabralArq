## Como Executar

**1. Inicie o banco de dados PostgreSQL pelo docker**
`$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres`

**2. Baixe as dependências do projeto**
`$ yarn install`

**3. Mude para o diretório do backend**
`$ cd ./packages/backend`

**4. Mude as configurações do arquivo `ormconfig.json` de acordo com seu banco de dados**

```json
{
  "type": "postgres", // Database type
  "host": "localhost", // Database host
  "port": 5432, // Database port
  "username": "postgres",
  "password": "mysecretpassword",
  "database": "kadu_cabral_arq", // You need to create this database in Postgres

  //Do not change those lines
  "entities": ["./src/modules/**/infra/typeorm/entities/*.ts"],
  "migrations": ["./src/shared/infra/typeorm/migrations/*ts"],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}
```

**7. Atualize a base de dados**
`$ yarn typeorm migration:run`

**6. Execute a API**
`$ yarn dev:server`

## Rotas do backend

- **[Rotas de Funcionário](./src/modules/employee/infra/http/routes/README.md)**

- **[Rotas de Usuário](./src/modules/user/infra/http/routes/README.md)**
