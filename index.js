var Hapi = require('hapi');

// Create a server with a host, port, and options
var server = new Hapi.Server('localhost', 8080);

// Define the route
var hello = {
    handler: function (request) {

        request.reply({ greeting: 'hello world' });
    }
};

var home = {
    handler: function (request) {

        request.reply({ greeting: 'home page' });
    }
};

var user = {
    handler: function (request) {

        request.reply({ greeting: 'user data' });
    }
};


server.route([
    { method: 'GET', path: '/home', config: home },
    { method: 'GET', path: '/user', config: user },
    { method: 'GET', path: '/hello', config: hello }
]);

// Start the server
server.start();
