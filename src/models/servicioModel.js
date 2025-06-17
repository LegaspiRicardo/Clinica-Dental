const pool = require('../config/db');

const getAllServicios = async () => {
    const [rows] = await pool.query('SELECT * FROM servicios');
    return rows;
};


const getServicioById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM servicios WHERE id = ?' , [id]);
    return rows [0];
};


const createServicio = async (servicio) => {
    const{ nombre, descripcion, precio, duracion_estimada } = servicio;
    const [result] = await pool.query('INSERT INTO servicios (nombre, descripcion, precio, duracion_estimada) VALUES (?, ?, ?, ?)', [nombre, descripcion, precio, duracion_estimada]);
    return {id: result.insertId, nombre, descripcion, precio, duracion_estimada};
};


const updateServicio = async (id, servicio) => {
    const{ nombre, descripcion, precio, duracion_estimada } = servicio;
    await pool.query('UPDATE servicios SET nombre = ?, descripcion = ?, precio = ?, duracion_estimada = ? WHERE id = ?', [nombre, descripcion, precio, duracion_estimada]);
    return {id, nombre, descripcion, precio, duracion_estimada};
};


const deleteServicio = async (id) => {
    await pool.query('DELETE FROM servicios WHERE id = ?', [id]);
    return {id};
};

module.exports ={
    getAllServicios,
    getServicioById,
    createServicio,
    updateServicio,
    deleteServicio
};