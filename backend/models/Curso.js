import DataTypes from 'sequelize';
import sequelize from '../utils/database.js';

const Curso = sequelize.define('curso', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { underscored : true });

export default Curso;