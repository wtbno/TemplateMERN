const express = require("express");
const routes = express.Router();

const UsuarioController = require("../controller/usuarios.controller");


routes.post("/usuario", UsuarioController.create);

routes.get("/usuario", UsuarioController.read);

routes.delete("/usuario/:id", UsuarioController.delete);





module.exports = routes;
