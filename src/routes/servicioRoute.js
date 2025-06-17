const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');


//Obtener todos los servicio
router.get('/', servicioController.getServicios);

//Obener un servicio por ID
router.get('/:id', servicioController.getServicio);

//Crear un nuevo servicio
router.post('/', servicioController.createServicio);

//Actualizar un servicio por ID
router.put('/:id', servicioController.updateServicio );

//Eliminar un servicio por ID
router.delete('/:id', servicioController.deleteServicio );


module.exports = router;