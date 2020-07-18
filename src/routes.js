const express = require('express');
const connection = require('./database/connection');

const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Gerar Ids aleatorios
const crypto = require('crypto');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.list);

routes.post('/casos', CasoController.create);
routes.get('/casos', CasoController.list);
routes.delete('/casos/:id', CasoController.delete);

module.exports = routes;