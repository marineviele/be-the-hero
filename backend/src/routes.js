const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index); /** Get all ONGs */
routes.post("/ongs", OngController.create); /** Insert an ONG */

routes.get("/profile", ProfileController.index); /** Get specific Incident */

routes.post("/incidents", IncidentController.create); /** Insert Incident */
routes.get("/incidents", IncidentController.index); /** Get all Incidents */
routes.delete("/incidents/:id", IncidentController.delete); /** Delete a specific Incident */


module.exports = routes;