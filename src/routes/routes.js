const express = require('express');
const router = express.Router();

const RotasLucas = require('./routes-lucas');

router.use('/', RotasLucas);

module.exports = router;