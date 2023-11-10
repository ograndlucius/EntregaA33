const express = require('express');
const router = express.Router();

const NikeController = require('./controllers/NikeController.js');

router.get('/nikes', NikeController.consultaNikes); // "/nikes" é o comando resposável por buscar todos os tênis


module.exports = router;
