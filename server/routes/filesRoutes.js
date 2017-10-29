/**
 * Created by isp on 10/1/17.
 */

const connectionString = "postgres://localhost:5432/main";

module.exports = function(app, db) {
    app.post('/api/v1/filesdata', (req, res) => {
        // Здесь будем создавать заметку.
        //console.log(req.body);
        //res.send('Hello');
        //console.log(db);

        const pool = new db.Pool({
            connectionString: connectionString
        });
        
        pool.query('INSERT INTO data_files (name, path, type) VALUES (\''
            + req.body.name +'\', \''
            + req.body.path + '\', \''
            + req.body.type + '\')', (err, respond) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(respond.rows);
            }
            pool.end()
        });

    });
    app.post('/file_upload', (req, res) => {
        console.log(req.files);
        //if (!req.files)
            //return res.status(400).send('No files were uploaded.');

        /*let file = req.files.fileName;

        file.mv('/csv', function(err) {
            if (err)
                return res.status(500).send(err);

            res.send('File uploaded!');
        });*/

        /*var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) {
            console.log("Uploading: " + filename);

            //Path where image will be uploaded
            fstream = fs.createWriteStream(__dirname + '/csv/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {
                console.log("Upload Finished of " + filename);
                res.redirect('back');           //where to go next
            });
        });*/

        //res.status(200).end();
    });
    app.get('/api/v1/filesdata/:id', (req, res) => {
        const id = req.params.id;
        const pool = new db.Pool({
            connectionString: connectionString
        });
        //console.log(id);
        pool.query('SELECT * FROM data_files WHERE file_id=\'' + id + '\'', (err, respond) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(respond.rows);
            }
            pool.end()
        });
    });
    app.get('/api/v1/filesdata', (req, res) => {
        const id = req.params.id;
        const pool = new db.Pool({
            connectionString: connectionString
        });
        //console.log(id);
        pool.query('SELECT * FROM data_files', (err, respond) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(respond.rows);
            }
            pool.end()
        });
    });
    app.delete('/api/v1/filesdata/:id', (req, res) => {
        const id = req.params.id;
        const pool = new db.Pool({
            connectionString: connectionString
        });
        //console.log(id);
        pool.query('DELETE FROM data_files WHERE file_id=\'' + id + '\'', (err, respond) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(respond.rows);
            }
            pool.end()
        });
    });
    app.put('/api/v1/filesdata/:id', (req, res) => {
        const id = req.params.id;
        const pool = new db.Pool({
            connectionString: connectionString
        });
        //console.log(id);
        pool.query('UPDATE data_files SET name=\''
            + req.body.name + '\', path=\''
            + req.body.path + '\', type=\''
            + req.body.type + '\' WHERE file_id=\'' + id + '\'', (err, respond) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(respond.rows);
            }
            pool.end()
        });
    });
};