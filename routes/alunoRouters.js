const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");

const AlunoController = require("../controllers/alunoController");

routes.get("/alunos",auth,AlunoController.relatorio);
routes.get("/alunos/cadastrar",auth,AlunoController.cadastrarGet);
routes.get("/alunos/excluir/:matricula",auth,AlunoController.excluir);
routes.get("/alunos/atualizar/:matricula",auth,AlunoController.atualizar);
routes.post("/alunos",auth,AlunoController.cadastrarPost);
routes.post("/alunos /atualizar",auth, AlunoController.atualizarPost);
routes.get("/alunos/:matricula",auth,AlunoController.detalhar);





module.exports = routes;