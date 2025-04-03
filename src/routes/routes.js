const express = require('express');
const router = express.Router();

const usuarioApartamentoController = require('../controllers/usuarioApartamento');

const AmbientesController = require('../controllers/ambientes');

router.get('/usuarioApartamento', usuarioApartamentoController.listaUsuariosApartamento);

router.post('/usuarioApartamento', usuarioApartamentoController.cadastrarUsuariosApartamentoUsuariosApartamento);

router.patch('/usuarioApartamento', usuarioApartamentoController.editarUsuariosApartamentoUsuariosApartamento);

router.delete('/usuarioApartamento', usuarioApartamentoController.apagarUsuariosApartamentoUsuariosApartamento);

// ROTA AMBIENTES

router.get('/ambientes', AmbientesController.listaUsuariosApartamento);

router.post('/ambientes', AmbientesController.cadastrarUsuariosApartamentoUsuariosApartamento);

router.patch('/ambientes', AmbientesController.editarUsuariosApartamentoUsuariosApartamento);

router.delete('/ambientes', AmbientesController.apagarUsuariosApartamentoUsuariosApartamento);

module.exports = router;