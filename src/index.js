const express = require('express');
const routes = require('./routes');

//cors é para segurança, quem pode acessar nossa aplicação
const cors = require('cors');

const app = express();

app.use(cors());

//imforma que os dados transitados serão do tipo Json
app.use(express.json());
app.use(routes);

/**
 * Tipos de Parametros
 * 
 * Query Params: Parametros nomeados enviados na rota após "?"
 * Route Params: Parametros utilizados para identificar retursos
 * Request Body: Corpo da requisição, para criar ou alterar recursos
 */

 /**
  * Vamos usar o SQLite, pois fica no proprio projeto
  * Vamos instalar o KNEX para fazer acesso e requisição ao banco de dados - http://knexjs.org
  * dar o commando 'npx knex init' para o arquivo de configuração ser gerado
  */


app.listen(3333);