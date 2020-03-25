const express = require('express');


const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

// Session
routes.post('/sessions', SessionController.store);


// Ongs
routes.get('/profile', ProfileController.index);
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store)

// Incidents
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;