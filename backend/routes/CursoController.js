import express from "express";
import cursoService from "../services/CursoService.js";

let router = express.Router();

router.post("/addCurso", function (req, res) {
    const cursoModel = {
        nome: req.body.nome,
    }
    const curso = cursoService.salvarCurso(cursoModel);
    return res.status(201).json(curso);
});

router.get("/getTodosCursos", async function (req, res) {
    const allCursos = await cursoService.getTodosCursos();
    return res.status(200).json(allCursos);
});

router.get("/curso/:id", async function (req, res) {
    const curso = await cursoService.getCursoPorId(req.params.id);
    return res.status(200).json(curso);
});

router.delete("/apagarCurso/:id", async function (req, res) {
    const curso = await cursoService.apagarCursoPorId(req.params.id);
    return res.status(200).json(curso);
});

router.put("/atualizarCurso/:id", async function (req, res) {
    const cursoModel = {
        nome: req.body.nome,
    };

    const curso = await cursoService.atualizarCursoPorId(req.params.id, cursoModel);
    return res.status(200).json(curso);
});


export default router;