import express from "express";
import alunoService from "../services/AlunoService.js";
import multer from "multer";
import process from "process";

let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './images');
    },
    filename: function (req, file, callback) {
        callback(null, req.body.nome + "_" + req.body.sobrenome + "_" + Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage }).single('file');

// salvar usuario
router.post("/addAluno", async function (req, res) {

    upload(req, res, async function (err) {
        const alunoModel = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            genero: req.body.genero
        }

        if (err) {
            return res.end("Error uploading file.");
        }

        const aluno = await alunoService.salvarAluno(alunoModel);
        return res.status(200).json(aluno);

    }

    );

});

// buscar todos usuarios
router.get("/getTodosAlunos", async function (req, res) {
    const allAlunos = await alunoService.getTodosAlunos();
    return res.status(200).json(allAlunos);
});

// buscar por id
router.get("/aluno/:id", async function (req, res) {
    const aluno = await alunoService.getAlunoPorId(req.params.id);
    return res.status(200).json(aluno);
});

// deletar por id
router.delete("/apagarAluno/:id", async function (req, res) {
    const aluno = await alunoService.apagarAlunoPorId(req.params.id);
    return res.status(200).json(aluno);
});

//  atualizar por id
router.put("/atualizarAluno/:id", async function (req, res) {
    upload(req, res, async function (err) {
        // adicionar upload
        const alunoModel = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            genero: req.body.genero
        }

        if (err) {
            return res.end("Error uploading file.");
        }

        const aluno = await alunoService.atualizarAlunoPorId(req.params.id, alunoModel);
        return res.status(200).json(aluno);
    });
});

router.get('/alunoImage/:id', async function (req, res){
    const aluno = await alunoService.getAlunoPorId(req.params.id);
    res.sendFile(process.cwd() + "\\" + aluno.foto_perfil);

});

export default router;