import cursoRepository from "../repositories/CursoRepository.js";

const salvarCurso = (cursoModel) => {
    return cursoRepository.salvarCurso(cursoModel);
}

const getCursoPorId = (id) => {
    return cursoRepository.getCursoPorId(id);
}

const getTodosCursos = () => {
    return cursoRepository.getTodosCursos();
}

const apagarCursoPorId = (id) => {
    return cursoRepository.apagarCursoPorId(id);
}

const atualizarCursoPorId = (id, cursoModel) => {
    return cursoRepository.atualizarCursoPorId(id, cursoModel);
}

const service = {
    salvarCurso,
    getCursoPorId,
    getTodosCursos,
    apagarCursoPorId,
    atualizarCursoPorId
}


export default service;