const express = require("express");
const routes = express.Router();

const UsuarioController = require("../controller/usuarios.controller");

routes.post("/usuario", UsuarioController.create);
routes.put("/usuario", UsuarioController.update);
routes.get("/usuarios", UsuarioController.index);
routes.get("/usuario.details/:_id", UsuarioController.details);

routes.delete("/usuario/:_id", UsuarioController.delete);

module.exports = routes;
