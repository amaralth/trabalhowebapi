const { Animal } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const animal = await Animal.create({
        nome: req.body.nome,
        tipo: req.body.tipo,
        idade: req.body.idade,
        clienteId: req.body.clienteId
      });
      return res.status(201).json({ message: 'Animal criado com sucesso!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async showAll(req, res) {
    try {
      const animais = await Animal.findAll();
      return res.status(200).json({ animais });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async show(req, res) {
    try {
      const animal = await Animal.findByPk(req.params.id, {
        include: 'cliente'
      });
      if (!animal) {
        return res.status(404).json({ error: 'Animal não encontrado' });
      }
      return res.status(200).json({ animal });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const animal = await Animal.findByPk(req.params.id);
      if (!animal) {
        return res.status(404).json({ error: 'Animal não encontrado' });
      }
      await animal.update({
        nome: req.body.nome,
        tipo: req.body.tipo,
        idade: req.body.idade,
        clienteId: req.body.clienteId
      });
      return res.status(200).json({ message: 'Animal atualizado com sucesso!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Animal.destroy({
        where: { id: req.params.id }
      });
      if (!deleted) {
        return res.status(404).json({ error: 'Animal não encontrado' });
      }
      return res.status(204).json({ message: 'Animal excluído com sucesso!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
