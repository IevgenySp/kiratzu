var Server = new require('./server/server.js');
var WebSocketServer = new require('./server/webSocketServer.js');
var port = 8000;
var wsPort = 8001;
var server = new Server(port);
var wsServer = new WebSocketServer(wsPort);
var fs = require('fs');
var pug = require('pug');


server.dispatcher.set('views', __dirname + '/templates');

server.addRout('GET', '/', 'index.pug');

server.addSources(__dirname, 'templates', '/templates');
server.addSources(__dirname, '/bin');
server.addSources(__dirname, '/client/css');

server.listen(function(response) {

});

wsServer.on('message', function(message, client, clientID) {
    var response = JSON.parse(message);
    if (response.todo === 'createHeightMap') {
        response.chunks.forEach(function(chunk) {

            var key = response.name+response.chunkPath.join('_').toString();
            var heightMaps = db.collection('heightMaps');
            var heightMap;

            heightMaps.find({key: key})
                .toArray()
                .then(function(val) {
                    var heightMap = val[0];
                    var normalMap;

                    if (!heightMap) {

                        var key = response.name+response.chunkPath.join('_').toString();
                        var heightMaps = db.collection('heightMaps');

                        var heightMap = planetHeightMapFactory
                            .generate(
                                response.plane,
                                chunk,
                                response.options,
                                response.width,
                                response.height
                            );

                        var normalMap = planetNormalMapFactory
                            .generate(
                                response.plane,
                                chunk,
                                response.options,
                                response.width,
                                response.height,
                                heightMap.buffer
                            );

                        var aoMap = planetAOMapFactory
                            .generate(
                                response.plane,
                                chunk,
                                response.options,
                                response.width,
                                response.height,
                                heightMap.buffer
                            );

                        var slopeMap = planetSlopeMapFactory
                            .generate(
                                response.plane,
                                chunk,
                                response.options,
                                response.width,
                                response.height,
                                heightMap.buffer
                            );

                        var heightMapR = new Float32Array(heightMap.length / 4);
                        var normalMapRGB = new Float32Array(normalMap.length / 4 * 3);
                        var aoMapRGB = new Float32Array(aoMap.length / 4 * 3);
                        var slopeMapRGB = new Float32Array(slopeMap.length / 4 * 3);

                        for (var i = 0; i < heightMap.length; i += 4) {
                            heightMapR[i / 4] = heightMap[i];
                        }

                        for (var i = 0; i < normalMap.length; i += 4) {

                            normalMapRGB[i / 4 * 3] = normalMap[i];
                            normalMapRGB[i / 4 * 3 + 1] = normalMap[i + 1];
                            normalMapRGB[i / 4 * 3 + 2] = normalMap[i + 2];

                        }

                        for (var i = 0; i < aoMap.length; i += 4) {
                            aoMapRGB[i / 4 * 3] = aoMap[i];
                            aoMapRGB[i / 4 * 3 + 1] = aoMap[i + 1];
                            aoMapRGB[i / 4 * 3 + 2] = aoMap[i + 2];
                        }

                        for (var i = 0; i < slopeMap.length; i += 4) {
                            slopeMapRGB[i / 4 * 3] = slopeMap[i];
                            slopeMapRGB[i / 4 * 3 + 1] = slopeMap[i + 1];
                            slopeMapRGB[i / 4 * 3 + 2] = slopeMap[i + 2];
                        }

                        var heightMapSrc = './maps/height/' + key + '.dat';
                        var normalMapSrc = './maps/normal/' + key + '.dat';
                        var aoMapSrc = './maps/ao/' + key + '.dat';
                        var slopeMapSrc = './maps/slope/' + key + '.dat';

                        var heightMapstream = fs.createWriteStream(heightMapSrc);
                        //prepare the length of the buffer to 4 bytes per float
                        var heightRCompress = new Buffer(heightMapR.length * 4);
                        for (var i = 0; i < heightMapR.length; i++) {
                            //write the float in Little-Endian and move the offset
                            heightRCompress.writeFloatLE(heightMapR[i], i * 4);
                        }
                        heightMapstream.write(heightRCompress);
                        heightMapstream.end();

                        var normalMapstream = fs.createWriteStream(normalMapSrc);
                        //prepare the length of the buffer to 4 bytes per float
                        var normalRGBCompress = new Buffer(normalMapRGB.length * 4);
                        for (var i = 0; i < normalMapRGB.length; i++) {
                            //write the float in Little-Endian and move the offset
                            normalRGBCompress.writeFloatLE(normalMapRGB[i], i * 4);
                        }
                        normalMapstream.write(normalRGBCompress);
                        normalMapstream.end();

                        var aoMapstream = fs.createWriteStream(aoMapSrc);
                        //prepare the length of the buffer to 4 bytes per float
                        var aoRGBCompress = new Buffer(aoMapRGB.length * 4);
                        for (var i = 0; i < aoMapRGB.length; i++) {
                            //write the float in Little-Endian and move the offset
                            aoRGBCompress.writeFloatLE(aoMapRGB[i], i * 4);
                        }
                        aoMapstream.write(aoRGBCompress);
                        aoMapstream.end();

                        var slopeMapstream = fs.createWriteStream(slopeMapSrc);
                        //prepare the length of the buffer to 4 bytes per float
                        var slopeRGBCompress = new Buffer(slopeMapRGB.length * 4);
                        for (var i = 0; i < slopeMapRGB.length; i++) {
                            //write the float in Little-Endian and move the offset
                            slopeRGBCompress.writeFloatLE(slopeMapRGB[i], i * 4);
                        }
                        slopeMapstream.write(slopeRGBCompress);
                        slopeMapstream.end();

                        heightMaps.insert({
                            key: key,
                            heightMap: heightMapSrc,
                            normalMap: normalMapSrc,
                            aoMap: aoMapSrc,
                            slopeMap: slopeMapSrc
                        });

                        var data = JSON.stringify({
                            chunkPath: response.chunkPath,
                            heightMap: heightMapSrc,
                            normalMap: normalMapSrc,
                            aoMap: aoMapSrc,
                            slopeMap: slopeMapSrc
                        });

                        client.send(data);

                    } else {

                        var data = JSON.stringify({
                            chunkPath: response.chunkPath,
                            heightMap: heightMap.heightMap,
                            normalMap: heightMap.normalMap,
                            aoMap: heightMap.aoMap,
                            slopeMap: heightMap.slopeMap
                        });

                        client.send(data);
                    }

                });

        })

    }

});

wsServer.on('close', function(message, client, clientID) {
    delete wsServer.clients[clientID];
});

