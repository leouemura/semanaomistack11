### Terminal Install setup
npm init -y
yarn add express
yarn add nodemon -D
npm install knex
npm install sqlite3
npx knex init
npx knex migrate:make <nome.da.migração>
npx knex migrate:latest
npx knex migrate:make create_incidents
npx knex migrate:latest
npm install cors



## express
Pacote baseado em node.js

## nodemon
Carrega a aplicação automaticamente após a mudança de código...

## knex
É um Query Builder.
    Conceitos: Driver: SELECT * FROM users
               Query Builder: table('users').select('*').where()
Nele há o suporte para diversos tipos de bancos de dados tais como pg, sqlite3, mysql, mysql2, oracledb, mssql
necessitando apenas a instalação via npm install <sqlite3>
Site para entender as funcionalidades: knexjs.org