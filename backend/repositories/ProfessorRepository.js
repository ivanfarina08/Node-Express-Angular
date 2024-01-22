import Professor from "../models/Professor.js";

const salvarProfessor = async (professorModel) => {
    const salvar = await Professor.create(professorModel);
    return salvar;
}

const getTodosProfessors = async () => {
  return await Professor.findAll({
    order: [
      ['id', 'ASC']
    ]
  });
};

const getProfessorPorId = async (id) => {
  return await Professor.findByPk(id);
};

const apagarProfessorPorId = async (id) => {
  return await Professor.destroy({ where: { id: id } });
};

const atualizarProfessorPorId = async (id, ProfessorModel) => {
  try {
    const result = await Professor.update(ProfessorModel, { where: { id: id } });
    if (result[0] === 1) {
      return { message: "Professor atualizado com sucesso" };
    } else {
      return { message: `Não foi possível encontrar Professor com ID: ${id} para atualizar`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};

const factory = {
    salvarProfessor,
    getTodosProfessors,
    getProfessorPorId,
    apagarProfessorPorId,
    atualizarProfessorPorId
  };

export default factory;