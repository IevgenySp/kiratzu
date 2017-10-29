/**
 * Created by isp on 10/1/17.
 */

const filesRoutes = require('./filesRoutes');

module.exports = function(app, db) {
    filesRoutes(app, db);
    // Тут, позже, будут и другие обработчики маршрутов 
};

/*const express = require('express');
const app = express();
const router = express.Router();
const port = 8000;
var pg = require('pg');
//postgres://root:xfiles22@159.203.139.77:22/root
//postgres://localhost:5432/main
var connectionString = "postgres://localhost:5432/main";

app.listen(port, () => {
    console.log('We are live on ' + port);
});*/

//var pgClient = new pg.Client(connectionString);

/*var pool = new pg.Pool({
    connectionString: connectionString
});

pool.query('SELECT * FROM data_files', (err, res) => {
    console.log(err, res.rows);
    pool.end()
});

router.get('/api/v1/datalist', (req, res, next) => {
    var results = [];
// Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM data_files');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

module.exports = router;*/