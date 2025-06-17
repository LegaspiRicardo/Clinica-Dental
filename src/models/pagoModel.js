const pool = require('../config/db');

const getAllPagos = async () => {
    const [rows] = await pool.query('SELECT * FROM pagos');
    return rows;
};


const getPagoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM pagos WHERE id = ?' , [id]);
    return rows [0];
};


const createPago = async (pago) => {
    const{ tipo_pago, monto, concepto } = pago;
    const [result] = await pool.query('INSERT INTO pagos (tipo_pago, monto, concepto) VALUES (?, ?, ?)', [tipo_pago, monto, concepto]);
    return {id: result.insertId, tipo_pago, monto, concepto};
};


const updatePago = async (id, pago) => {
    const{ tipo_pago, monto, concepto } = pago;
    await pool.query('UPDATE pagos SET tipo_pago = ?, monto = ?, concepto = ? WHERE id = ?', [tipo_pago, monto, concepto]);
    return {id, tipo_pago, monto, concepto};
};


const deletePago = async (id) => {
    await pool.query('DELETE FROM pagos WHERE id = ?', [id]);
    return {id};
};

module.exports ={
    getAllPagos,
    getPagoById,
    createPago,
    updatePago,
    deletePago
};