'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Animal, {
        foreignKey: 'clienteId',
        as: 'animais'
      });
      Cliente.hasMany(models.Servico, {
        foreignKey: 'clienteId',
        as: 'servicos'
      });
    }
  }

  Cliente.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'cliente'
  });

  return Cliente;
};