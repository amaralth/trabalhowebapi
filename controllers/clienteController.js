const { Cliente } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const cliente = await Cliente.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
      });
      return res.status(201).json({ message: 'Cliente criado com sucesso!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async showAll(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.status(200).json({ clientes });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async show(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
      return res.status(200).json({ cliente });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
      await cliente.update({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
      });
      return res.status(200).json({ message: 'Cliente atualizado com sucesso!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Cliente.destroy({
        where: { id: req.params.id }
      });
      if (!deleted) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
      return res.status(204).json({ message: 'Cliente excluído com sucesso!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
