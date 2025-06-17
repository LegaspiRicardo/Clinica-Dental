const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pagoController');


//Obtener todos los pagos
router.get('/', pagoController.getPagos);

//Obener un pago por ID
router.get('/:id', pagoController.getPago);

//Crear un  pago
router.post('/', pagoController.createPago);

//Actualizar un pago por ID
router.put('/:id', pagoController.updatePago );

//Eliminar una pago por ID
router.delete('/:id', pagoController.deletePago );


module.exports = router;