const express = require("express");
const routes = express.Router();

const NewUserController = require("../controller/NewUserController");


routes.post("/newuser", NewUserController.create);

routes.get("/newuser", NewUserController.read);

routes.delete("/newuser/:id", NewUserController.delete);





module.exports = routes;
