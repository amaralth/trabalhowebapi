const express = require('express');
const router = express.Router();

const animalController = require('../controllers/animalController');
const clienteController = require('../controllers/clienteController');
const servicoController = require('../controllers/servicoController');

router.post('/animais', animalController.create);
router.get('/animais', animalController.showAll);
router.get('/animais/:id', animalController.show);
router.put('/animais/:id', animalController.update);
router.delete('/animais/:id', animalController.delete);

router.post('/clientes', clienteController.create);
router.get('/clientes', clienteController.showAll);
router.get('/clientes/:id', clienteController.show);
router.put('/clientes/:id', clienteController.update);
router.delete('/clientes/:id', clienteController.delete);

router.post('/servicos', servicoController.create);
router.get('/servicos', servicoController.showAll);
router.get('/servicos/:id', servicoController.show);
router.put('/servicos/:id', servicoController.update);
router.delete('/servicos/:id', servicoController.delete);

module.exports = router;