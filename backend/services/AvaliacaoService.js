import avaliacaoRepository from "../repositories/AvaliacaoRepository.js";

const salvarAvaliacao = (avaliacaoModel) => {
    return avaliacaoRepository.salvarAvaliacao(avaliacaoModel);
}

const getAvaliacaoPorId = (id) => {
    return avaliacaoRepository.getAvaliacaoPorId(id);
}

const getTodosAvaliacaos = () => {
    return avaliacaoRepository.getTodosAvaliacaos();
}

const apagarAvaliacaoPorId = (id) => {
    return avaliacaoRepository.apagarAvaliacaoPorId(id);
}

const atualizarAvaliacaoPorId = (id, avaliacaoModel) => {
    return avaliacaoRepository.atualizarAvaliacaoPorId(id, avaliacaoModel);
}

const service = {
    salvarAvaliacao,
    getAvaliacaoPorId,
    getTodosAvaliacaos,
    apagarAvaliacaoPorId,
    atualizarAvaliacaoPorId
}


export default service;