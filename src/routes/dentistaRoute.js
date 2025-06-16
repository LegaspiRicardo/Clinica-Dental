const express = require('express');
const router = express.Router();
const dentistaController = require('../controllers/dentistaController');


//Obtener todos los dentistas
router.get('/', dentistaController.getDentistas);

//Obener un dentista por ID
router.get('/:id', dentistaController.getDentista);

//Crear un nuevo dentista
router.post('/', dentistaController.createDentista);

//Actualizar un dentista por ID
router.put('/:id', dentistaController.updateDentista );

//Eliminar un dentista por ID
router.delete('/:id', dentistaController.deleteDentista );


module.exports = router;