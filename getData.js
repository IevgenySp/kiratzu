/**
 * Created by isp on 10/1/17.
 */

var express = require('express');
var router = express.Router();
var pg = require('pg');
//postgres://root:xfiles22@159.203.139.77:22/root
//postgres://localhost:5432/main
var connectionString = "postgres://localhost:5432/main";

//var pgClient = new pg.Client(connectionString);

var pool = new pg.Pool({
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

/*const client = new pg.Client({
    connectionString: connectionString
});
client.connect();

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    client.end()
});*/

/*pool.connect((err, client, done) => {
    pgClient.query('SELECT * FROM data_files');
    done((a, b) => {
        console.log(a);
        console.log(b);
    });
});

pool.end();*/

/*pgClient.connect();

var query = pgClient.query('SELECT * FROM data_files');

console.log(query);
//console.log(query);
query.on("row", function(row,result){

    result.addRow(row);

    console.log(result);

});

query.on("end", function(result){
    pgClient.end();
});*/