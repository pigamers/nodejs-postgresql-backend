const pool = require('../db')

exports.getpostdetail = (req, res) => {
    pool.query('SELECT * FROM demo', (err, result) => {
        if (err) throw err;
            res.status(200).json(result.rows);
    })
}