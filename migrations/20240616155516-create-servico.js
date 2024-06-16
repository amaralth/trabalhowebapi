'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('servico', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
      },
      clienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'cliente'
          },
          key: 'id'
        },
        allowNull: false
      },
      animalId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'animal'
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('servico');
  }
};