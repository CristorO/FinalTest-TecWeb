const router = require('express').Router();
const conexion = require('../config/conexion');

// ----------------asignacion de rutas
// get algo
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM users';
    conexion.query(sql, (error, rows, fields) => {
        if (error) throw error;
        else {
            res.json(rows);
        }
    });
});

// get un solo algo
router.get('/:id', (req, res) => {
    const { id } = req.params;
    let sql = 'SELECT * FROM users WHERE id = ?';
    conexion.query(sql, [id], (error, rows, fields) => {
        if (error) throw error;
        else {
            res.json(rows);
        }
    });
});

// agregar algo
router.post('/', (req, res) => {
    const { name, email, phone } = req.body;
    let sql = `INSERT INTO users (name, email, phone) VALUES ('${name}', '${email}', '${phone}')`;
    conexion.query(sql, (error, rows, fields) => {
        if (error) throw error;
        else {
            res.json({ status: 'User saved' });
        }
    });
});

// eliminar algo
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let sql = `DELETE FROM users WHERE id = ${id}`;
    conexion.query(sql, (error, rows, fields) => {
        if (error) throw error;
        else {
            res.json({ status: 'User deleted' });
        }
    });
});

// actualizar algo
router.put('/:id', (req, res) => {
    const { name, email, phone } = req.body;
    const { id } = req.params;
    let sql = `UPDATE users SET name = '${name}', email = '${email}', phone = '${phone}' WHERE id = ${id}`;
    conexion.query(sql, (error, rows, fields) => {
        if (error) throw error;
        else {
            res.json({ status: 'User updated' });
        }
    });
});
// ----------------------------------------------------------

module.exports = rutas;