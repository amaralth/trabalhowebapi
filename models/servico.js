'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Servico extends Model {
    static associate(models) {
      Servico.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'cliente'
      });
      Servico.belongsTo(models.Animal, {
        foreignKey: 'animalId',
        as: 'animal'
      });
    }
  }

  Servico.init({
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    data: DataTypes.DATE,
    clienteId: DataTypes.INTEGER,
    animalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Servico',
    tableName: 'servico'
  });

  return Servico;
};
