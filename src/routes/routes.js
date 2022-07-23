const express = require("express");
const routes = express.Router();

const AnnotationController = require("../controller/AnnotationController");
const PriorityController = require("../controller/PriorityController");

routes.post("/annotations", AnnotationController.create);

routes.get("/annotations", AnnotationController.read);

routes.delete("/annotations/:id", AnnotationController.delete);



routes.get('/priority', PriorityController.read)

routes.post('/priority/:id', PriorityController.update)


module.exports = routes;
