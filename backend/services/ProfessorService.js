import professorRepository from "../repositories/ProfessorRepository.js";

const salvarProfessor = (professorModel) => {
    return professorRepository.salvarProfessor(professorModel);
}

const getProfessorPorId = (id) => {
    return professorRepository.getProfessorPorId(id);
}

const getTodosProfessors = () => {
    return professorRepository.getTodosProfessors();
}

const apagarProfessorPorId = (id) => {
    return professorRepository.apagarProfessorPorId(id);
}

const atualizarProfessorPorId = (id, professorModel) => {
    return professorRepository.atualizarProfessorPorId(id, professorModel);
}

const service = {
    salvarProfessor,
    getProfessorPorId,
    getTodosProfessors,
    apagarProfessorPorId,
    atualizarProfessorPorId
}


export default service;