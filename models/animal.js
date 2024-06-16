'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
      Animal.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'cliente'
      });
      Animal.hasMany(models.Servico, {
        foreignKey: 'animalId',
        as: 'servicos'
      });
    }
  }

  Animal.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    clienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Animal',
    tableName: 'animal'
  });

  return Animal;
};