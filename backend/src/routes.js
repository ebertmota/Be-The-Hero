const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

//Controllers
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

//Validators
const checkAuthorization = require('./validators/authorization');
const checkBody = require('./validators/ongs');
const { idValidator, pageValidator } = require('./validators/incidents');

const routes = express.Router();

// Session
routes.post('/sessions', SessionController.store);


// Ongs
routes.get('/profile', checkAuthorization, ProfileController.index);
routes.get('/ongs', OngController.index);
routes.post('/ongs', checkBody, OngController.store)

// Incidents
routes.get(
  '/incidents', 
  checkAuthorization,
  pageValidator,
  IncidentsController.index);

routes.post('/incidents', checkAuthorization,IncidentsController.store);

routes.delete(
  '/incidents/:id', 
  checkAuthorization, 
  idValidator,
  IncidentsController.delete);

module.exports = routes;