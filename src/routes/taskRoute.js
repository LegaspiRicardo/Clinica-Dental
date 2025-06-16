const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');


//Obtener todas las tareas
router.get('/', taskController.getTasks);

//Obener una tarea por ID
router.get('/:id', taskController.getTask);

//Crear una nueva tarea
router.post('/', taskController.createTask);

//Actualizar una tarea por ID
router.put('/:id', taskController.updateTask );

//Eliminar una tarea por ID
router.delete('/:id', taskController.deleteTask );


module.exports = router;