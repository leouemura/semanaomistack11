const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;

/*
=> 02_Criando a base
INICIO: 55:42 
FIM: 56:36
*/