const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");

const FilmeController = require("../controllers/filmeController");

routes.get("/filme",auth,FilmeController.relatorio);
routes.get("/filme/cadastrar",auth,FilmeController.cadastrarGet);
routes.get("/filme/excluir/:cdg",auth,FilmeController.excluir);
routes.get("/filme/atualizar/:cdg",auth,FilmeController.atualizar);
routes.post("/filme",auth,FilmeController.cadastrarPost);
routes.post("/filme /atualizar",auth,FilmeController.atualizarPost);
routes.get("/filme/:cdg",auth,FilmeController.detalhar);





module.exports = routes;