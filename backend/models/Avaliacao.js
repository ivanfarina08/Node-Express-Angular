import DataTypes from 'sequelize';
import sequelize from '../utils/database.js';

const Avaliacao = sequelize.define('avaliacao', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nota: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{ underscored : true });

export default Avaliacao;