const express = require('express');
const router = express.Router();

const usuarioApartamentoController = require('../controllers/usuarioApartamento');

const ambientesController = require('../controllers/ambientes');

router.get('/usuarioApartamento', usuarioApartamentoController.listarUsuariosApartamento);

router.post('/usuarioApartamento', usuarioApartamentoController.cadastrarUsuariosApartamento);

router.patch('/usuarioApartamento/:id', usuarioApartamentoController.editarUsuariosApartamento);

router.delete('/usuarioApartamento', usuarioApartamentoController.apagarUsuariosApartamento);

// ROTA AMBIENTES

router.get('/ambientes', ambientesController.listarAmbientes);

router.post('/ambientes', ambientesController.cadastrarAmbientes);

router.patch('/ambientes/:id', ambientesController.editarAmbientes);

router.delete('/ambientes', ambientesController.apagarAmbientes);

module.exports = router;