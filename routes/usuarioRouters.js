const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");

const UsuarioController = require("../controllers/usuarioController");

routes.get("/usuarios",auth, UsuarioController.relatorio);
routes.get("/usuarios/cadastrar",UsuarioController.cadastrarGet);
routes.get("/usuarios/excluir/:_id",auth, UsuarioController.excluir);
routes.get("/usuarios/atualizar/:_id",auth,UsuarioController.atualizar);
routes.post("/usuarios",UsuarioController.cadastrarPost);
routes.post("/usuarios/atualizar",auth, UsuarioController.atualizarPost);
routes.get("/usuarios/login",UsuarioController.loginGet);
routes.post("/usuarios/login", UsuarioController.loginPost);
routes.get("/usuarios/sair",auth, UsuarioController.sair);
routes.get("/usuarios/:_id",auth,UsuarioController.detalhar);






module.exports = routes;