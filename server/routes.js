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

module.exports = router