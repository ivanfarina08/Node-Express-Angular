import express from "express";
let router = express.Router();
import professorService from "../services/ProfessorService.js";

router.post("/addProfessor", async function (req, res) {
    const professorModel = {
        nome: req.body.nome,
        curso_id: req.body.curso_id
    }
    const professor = await professorService.salvarProfessor(professorModel);
    return res.status(201).json(professor);
});

router.get("/getTodosProfessores", async function (req, res) {
    const allProfessors = await professorService.getTodosProfessors();
    return res.status(200).json(allProfessors);
});

router.get("/professor/:id", async function (req, res) {
    const professor = await professorService.getProfessorPorId(req.params.id);
    return res.status(200).json(professor);
});

router.delete("/apagarProfessor/:id", async function (req, res) {
    const professor = await professorService.apagarProfessorPorId(req.params.id);
    return res.status(200).json(professor);
});

router.put("/atualizarProfessor/:id", async function (req, res) {
    const professorModel = {
        nome: req.body.nome,
        curso_id: req.body.curso_id
    };

    const professor = await professorService.atualizarProfessorPorId(req.params.id, professorModel);
    return res.status(200).json(professor);
});

export default router;