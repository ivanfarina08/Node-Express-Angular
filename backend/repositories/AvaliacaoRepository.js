import Avaliacao from "../models/Avaliacao.js";

const salvarAvaliacao = async (avaliacaoModel) => {
    const salvar = await Avaliacao.create(avaliacaoModel);
    return salvar;
}

const getTodosAvaliacaos = async () => {
  return await Avaliacao.findAll({
    order: [
      ['id', 'ASC']
    ]
  });
};

const getAvaliacaoPorId = async (id) => {
  return await Avaliacao.findByPk(id);
};

const apagarAvaliacaoPorId = async (id) => {
  return await Avaliacao.destroy({ where: { id: id } });
};

const atualizarAvaliacaoPorId = async (id, AvaliacaoModel) => {
  try {
    const result = await Avaliacao.update(AvaliacaoModel, { where: { id: id } });
    if (result[0] === 1) {
      return { message: "Avaliacao atualizado com sucesso" };
    } else {
      return { message: `Não foi possível encontrar Avaliacao com ID: ${id} para atualizar`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};

const factory = {
    salvarAvaliacao,
    getTodosAvaliacaos,
    getAvaliacaoPorId,
    apagarAvaliacaoPorId,
    atualizarAvaliacaoPorId
  };

export default factory;