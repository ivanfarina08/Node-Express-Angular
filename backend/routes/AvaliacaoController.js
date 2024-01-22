import express from "express";
import avaliacaoService from "../services/AvaliacaoService.js";

let router = express.Router();

router.post("/addAvaliacao", function (req, res) {
    const avaliacaoModel = {
        aluno_id: req.body.aluno_id,
        curso_id: req.body.curso_id,
        nota: req.body.nota
    }
    const avaliacao = avaliacaoService.salvarAvaliacao(avaliacaoModel);
    return res.status(201).json(avaliacao);
});

router.get("/getTodosAvaliacoes", async function (req, res) {
    const allAvaliacaos = await avaliacaoService.getTodosAvaliacaos();
    return res.status(200).json(allAvaliacaos);
});

router.get("/avaliacao/:id", async function (req, res) {
    const avaliacao = await avaliacaoService.getAvaliacaoPorId(req.params.id);
    return res.status(200).json(avaliacao);
});

router.delete("/apagarAvaliacao/:id", async function (req, res) {
    const avaliacao = await avaliacaoService.apagarAvaliacaoPorId(req.params.id);
    return res.status(200).json(avaliacao);
});

router.put("/atualizarAvaliacao/:id", async function (req, res) {
    const avaliacaoModel = {
        aluno_id: req.body.aluno_id,
        curso_id: req.body.curso_id,
        nota: req.body.nota
    };

    const avaliacao = await avaliacaoService.atualizarAvaliacaoPorId(req.params.id, avaliacaoModel);
    return res.status(200).json(avaliacao);
});

export default router;