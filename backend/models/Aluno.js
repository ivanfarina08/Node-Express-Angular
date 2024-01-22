import DataTypes from 'sequelize';
import sequelize from '../utils/database.js';

const Aluno = sequelize.define('aluno', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: DataTypes.STRING,
    genero: DataTypes.STRING,
    foto_perfil: DataTypes.STRING
}, { underscored: true });

export default Aluno;