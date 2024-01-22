import Aluno from "./Aluno.js";
import Curso from "./Curso.js";
import Professor from "./Professor.js";
import Avaliacao from "./Avaliacao.js";

const associations = () => {

    Curso.hasMany(Professor);
    Aluno.hasMany(Avaliacao);
    Curso.hasMany(Avaliacao);
}

const factory = {
    associations
}

export default factory;
