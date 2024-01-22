import express from "express";
let router = express.Router();
import alunoController from "./AlunoController.js";
import professorController from "./ProfessorController.js";
import avaliacaoController from "./AvaliacaoController.js";
import cursoController from "./CursoController.js";

router.get("/", function (req, res) {
  console.log("hi!");
  res.status(200).json({ message: "hi!" });
});

router.use("/", alunoController);
router.use("/", professorController);
router.use("/", avaliacaoController);
router.use("/", cursoController);

export default router;