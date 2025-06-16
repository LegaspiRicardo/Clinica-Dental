const taskModel = require ('../models/taskModel');

const getTasks = async (req, res) => {
    const tasks = await taskModel.getAllTasks();
    res.json(tasks);
};


const getTask = async (req, res) => {
    const task = await taskModel.getTaskById(req.params.id);
    res.json(task)
};



const createTask = async (req, res) => {
    const newTask = await taskModel.createTask(req.body);
    res.status(201).json(newTask);
};




const updateTask = async (req, res) => {
    const updateTask = await taskModel.updateTask(req.params.id, req.body);
    res.json(updateTask);
};


const deleteTask = async (req, res) => {
    const deleteTask = await taskModel.deleteTask(req.params.id);
    res.json(deleteTask);
};


module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};