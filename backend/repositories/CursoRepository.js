import Curso from "../models/Curso.js";

const salvarCurso = async (cursoModel) => {
    const salvar = await Curso.create(cursoModel);
    return salvar;
}

const getTodosCursos = async () => {
  return await Curso.findAll({
    order: [
      ['id', 'ASC']
    ]
  });
};

const getCursoPorId = async (id) => {
  return await Curso.findByPk(id);
};

const apagarCursoPorId = async (id) => {
  return await Curso.destroy({ where: { id: id } });
};

const atualizarCursoPorId = async (id, CursoModel) => {
  try {
    const result = await Curso.update(CursoModel, { where: { id: id } });
    if (result[0] === 1) {
      return { message: "Curso atualizado com sucesso" };
    } else {
      return { message: `Não foi possível encontrar Curso com ID: ${id} para atualizar`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};


const factory = {
    salvarCurso,
    getTodosCursos,
    getCursoPorId,
    apagarCursoPorId,
    atualizarCursoPorId
  };

export default factory;