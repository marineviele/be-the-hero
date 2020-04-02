const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();
const validate = require('./controllers/ValidationController');


routes.post("/sessions", validate.sessionCreate, SessionController.create);/** Get ONG by Id for Login */

routes.get("/ongs", OngController.index);/** Get all ONGs */
routes.post("/ongs", validate.ongCreate, OngController.create);/** Insert an ONG */

routes.get("/profile", validate.profileIndex, ProfileController.index);/** Get specific Incident */

routes.post("/incidents", validate.incidentCreate, IncidentController.create); /** Insert Incident */
routes.get("/incidents" ,validate.incidentIndex, IncidentController.index);/** Get all Incidents */
routes.delete("/incidents/:id", validate.incidentDelete, IncidentController.delete);/** Delete a specific Incident */


module.exports = routes;