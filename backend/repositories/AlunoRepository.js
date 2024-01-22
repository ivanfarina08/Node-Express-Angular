import Aluno from "../models/Aluno.js";

//1- salvar usuario
const salvarAluno = async (AlunoModel) => {
    const salvar = await Aluno.create(AlunoModel);
    return salvar;
  }
  
  //2- buscar todos usuarios
  const getTodosAlunos = async () => {
    return await Aluno.findAll({
      order: [
        ['id', 'ASC']
      ]
    });
  };
  
  //3- buscar por id
  const getAlunoPorId = async (id) => {
    return await Aluno.findByPk(id); //primary key
  };
  
  //4- deletar por id
  const apagarAlunoPorId = async (id) => {
    return await Aluno.destroy({ where: { id: id } }); 
    //primeiro é o atributo do banco segundo é o parametro da função
  };
  
  //5- atualizar por id
  const atualizarAlunoPorId = async (id, AlunoModel) => {
    try {
      const result = await Aluno.update(AlunoModel, { where: { id: id } });
      //primeiro é o atributo do banco segundo é o parametro da função
      if (result[0] === 1) {
        return { message: "Aluno atualizado com sucesso" };
      } else {
        return { message: `Não foi possivel encontrar o aluno ${id} para atualizar`, status: 404 };
      }
    } catch (error) {
      return error;
    }
  };

const factory = {
    salvarAluno,
    getTodosAlunos,
    getAlunoPorId,
    atualizarAlunoPorId,
    apagarAlunoPorId
};


export default factory;