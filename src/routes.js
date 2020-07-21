const express = require('express');
const connection = require('./database/connection');

const verify = require('./shared/verify');

const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Gerar Ids aleatorios
const crypto = require('crypto');

const routes = express.Router();

routes.post('/sessions', SessionController.create);
routes.post('/logout', SessionController.logout);

routes.get('/ongs', verify.verifyJWT, OngController.list);
routes.post('/ongs', OngController.create);

routes.get('/profile', verify.verifyJWT, ProfileController.list);

routes.post('/casos',verify.verifyJWT, CasoController.create);
routes.get('/casos',verify.verifyJWT, CasoController.list);
routes.delete('/casos/:id',verify.verifyJWT, CasoController.delete);

module.exports = routes;