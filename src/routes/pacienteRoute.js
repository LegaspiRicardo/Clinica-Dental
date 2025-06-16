const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');


//Obtener todos los pacientes
router.get('/', pacienteController.getPacientes);

//Obener un paciente por ID
router.get('/:id', pacienteController.getPaciente);

//Crear un nuevo paciente
router.post('/', pacienteController.createPaciente);

//Actualizar un paciente por ID
router.put('/:id', pacienteController.updatePaciente );

//Eliminar un paciente por ID
router.delete('/:id', pacienteController.deletePaciente );


module.exports = router;