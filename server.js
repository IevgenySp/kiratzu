/**
 * Created by isp on 10/1/17.
 */

const express = require('express');
const fileUpload = require('express-fileupload');
var busboy = require('connect-busboy');
var bb = require('express-busboy');
var methodOverride = require('method-override');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
var multer = require('multer');
const path = require('path');
const port = 8000;

const pg = require('pg');
const connectionString = "postgres://localhost:5432/main";

var pool = new pg.Pool({
    connectionString: connectionString
});

/*pool.query('SELECT * FROM data_files', (err, res) => {
    console.log(err, res.rows);
    pool.end()
});*/

/*pool.query("INSERT INTO data_files (name, path, type) VALUES ('fff', 'fff', 'fff')", (err, res) => {
    console.log(err, res);
    pool.end()
});*/

//app.use(busboy());
//app.use(fileUpload());

//app.use(methodOverride());
//app.use(express.multipart());
//app.use(express.static(__dirname + "/../public"));
app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
//app.use(bodyParser({keepExtensions: true, uploadDir: path.join(__dirname,'/')}));

/*bb.extend(app , {
    upload: true,
    path: path.join(__dirname, 'csv'),
    allowedPath: /./
    //allowedPath: /^\/file_upload$/
});*/

//require('./server/routes')(app, {});
require('./server/routes')(app, pg);

app.get('/', function(req, res) {
    // do something here.
    /*res.render('index', function(err, html) {
        res.send(html);
    });*/
    //res.send('hello world');
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log(res);
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});