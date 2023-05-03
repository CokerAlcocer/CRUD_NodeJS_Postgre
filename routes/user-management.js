const express = require('express');
const router = express.Router();
const client = require('../src/database/dbconfig');

let id = 0;
let users = [];

router.get('', async (req, res) => {
    await client.query("SELECT * FROM users").then(({rows}) => {
        return res.json({
            code: 200,
            error: false,
            message:  rows.length !== 0 ? "OK" : "EMPTY",
            data: rows,
            count: rows.length
        }); 
    }).catch(err => {
        return res.json({
            code: 500,
            error: true,
            message: "INTERNAL ERROR SERVER"
        }); 
    });
});

router.get('/:id', async (req, res) => {
    let {id} = req.params;
    await client.query(`SELECT * FROM users WHERE id = ${id}`).then(({rows}) => {
        return res.json({
            code: 200,
            error: false,
            message: rows.length !== 0 ? "OK" : "NOT FOUND",
            data: rows[0],
            count: rows.length
        }); 
    }).catch(err => {
        return res.json({
            code: 500,
            error: true,
            message: "INTERNAL ERROR SERVER"
        }); 
    });
});

router.post('', async (req, res) => {
    let {name, surname} = req.body;
    await client.query("INSERT INTO users VALUES ($1, $2)", [name, surname]).then(() => {
        return res.json({
            code: 200,
            error: false,
            message: "USER REGISTERED"
        }); 
    }).catch(err => {
        return res.json({
            code: 500,
            error: true,
            message: "INTERNAL ERROR SERVER"
        }); 
    });
});

router.put('/:id', async (req, res) => {
    let {id} = req.params;
    let {name, surname} = req.body;
    await client.query(`UPDATE users SET name = $1, surname = $2 WHERE id = ${id}`, [name, surname]).then(() => {
        return res.json({
            code: 200,
            error: false,
            message: "USER UPDATED"
        }); 
    }).catch(err => {
        return res.json({
            code: 500,
            error: true,
            message: "INTERNAL ERROR SERVER"
        }); 
    });
});

router.delete('/:id', async (req, res) => {
    let {id} = req.params;
    await client.query(`DELETE FROM users WHERE id = ${id}`).then(() => {
        return res.json({
            code: 200,
            error: false,
            message: "USER DELETED"
        }); 
    }).catch(err => {
        return res.json({
            code: 500,
            error: true,
            message: "INTERNAL ERROR SERVER"
        }); 
    });
});

module.exports = router;