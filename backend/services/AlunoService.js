import alunoRepository from "../repositories/AlunoRepository.js";

const salvarAluno = (alunoModel) => {
    return alunoRepository.salvarAluno(alunoModel);
}

const getAlunoPorId = (id) => {
    return alunoRepository.getAlunoPorId(id);
}

const getTodosAlunos = () => {
    return alunoRepository.getTodosAlunos();
}

const apagarAlunoPorId = (id) => {
    return alunoRepository.apagarAlunoPorId(id);
}

const atualizarAlunoPorId = (id, alunoModel) => {
    return alunoRepository.atualizarAlunoPorId(id, alunoModel);
}

const service = {
    salvarAluno,
    getAlunoPorId,
    getTodosAlunos,
    apagarAlunoPorId,
    atualizarAlunoPorId
}


export default service;