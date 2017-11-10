var WebSocketServer = new require('ws');

var Server = function(port) {
    var _this = this;
    this.clients = {};

    this.events = {};

    this.dispatcher = new WebSocketServer.Server({
        port: port
    });

    this.dispatcher.on('connection', function(ws) {
        var id = Math.random();
        _this.clients[id] = ws;
        ws._events = {};
        for (var evt in _this.events) {
            var event = _this.events[evt];
            _this.on(event.name, event.callback);
        }
    })
};

Server.prototype.on = function(evt, callback) {
    if (!this.events[evt]) {
        this.events[evt] = {name: evt, callback: callback};
    }
    var clients = this.clients;
    for (var id in clients) {
        var ws = clients[id];
        if (!ws._events[evt]) {
            ws.on(evt, function() {
                callback.apply(this, [arguments[0], ws, id])
            })
        }
    }

};

module.exports = Server;