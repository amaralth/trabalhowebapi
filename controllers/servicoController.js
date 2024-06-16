const { Servico } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const servico = await Servico.create({
        descricao: req.body.descricao,
        preco: req.body.preco,
        data: new Date(req.body.data),
        clienteId: req.body.clienteId,
        animalId: req.body.animalId
      });
      return res.status(201).json({ message: 'Serviço criado com sucesso!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async showAll(req, res) {
    try {
      const servicos = await Servico.findAll();
      return res.status(200).json({ servicos });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async show(req, res) {
    try {
      const servico = await Servico.findByPk(req.params.id, {
        include: ['cliente', 'animal']
      });
      if (!servico) {
        return res.status(404).json({ error: 'Serviço não encontrado' });
      }
      return res.status(200).json({ servico });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const servico = await Servico.findByPk(req.params.id);
      if (!servico) {
        return res.status(404).json({ error: 'Serviço não encontrado' });
      }
      await servico.update({
        descricao: req.body.descricao,
        preco: req.body.preco,
        data: new Date(req.body.data),
        clienteId: req.body.clienteId,
        animalId: req.body.animalId
      });
      return res.status(200).json({ message: 'Serviço atualizado com sucesso!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Servico.destroy({
        where: { id: req.params.id }
      });
      if (!deleted) {
        return res.status(404).json({ error: 'Serviço não encontrado' });
      }
      return res.status(204).json({ message: 'Serviço excluído com sucesso!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
