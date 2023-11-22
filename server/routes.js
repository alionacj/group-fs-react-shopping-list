const express = require('express');
const router = express.Router();
const pool = require('./modules/pool');

router.get('/', (req, res) => {
    const sqlText = 
    `
        SELECT * FROM shoppinglist
        ORDER BY "isPurchased", "name";
    `
    pool.query(sqlText)
    .then((result) => {
        console.log(result.rows)
        res.send(result.rows)
    })
    .catch((error) => {
        console.error(error)
        res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
    const item = req.body
    const sqlText =
    `
        INSERT INTO shoppinglist ("name", "quantity", "unit")
        VALUES ($1, $2, $3);
    `
    const sqlValues = [
        item.name,
        item.quantity,
        item.unit
    ]
    console.log(sqlValues)
    pool.query(sqlText, sqlValues)
        .then((dbResult) => {
            res.sendStatus(201)
        })
        .catch((dbError) => {
            console.error(dbError)
            res.sendStatus(500)
        })
})

module.exports = router