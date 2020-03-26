const express = require ('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

/*
02_Criando a base

INSERINDO DADOS NA DATABASE IMPORTANDO A FUNÇÃO CONNECTION CRIADA ANTERIORMENTE + ASYNC AWAIT
INICIO:56:53
FIM: 58:33

ROTA PARA LISTAR TODAS AS ONGS DO BANCO DE DADOS
INICIO:
FIM:
*/