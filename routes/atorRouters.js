const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");

const AtorController = require("../controllers/atorController");

routes.get("/ator",auth,AtorController.relatorio);
routes.get("/ator/cadastrar",auth,AtorController.cadastrarGet);
routes.get("/ator/excluir/:cpf",auth,AtorController.excluir);
routes.get("/ator/atualizar/:cpf",auth,AtorController.atualizar);
routes.post("/ator",auth,AtorController.cadastrarPost);
routes.post("/ator /atualizar",auth,AtorController.atualizarPost);
routes.get("/ator/:cpf",auth,AtorController.detalhar);





module.exports = routes;