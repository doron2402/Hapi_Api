var hapi = require('hapi'),
	routes = require('./lib/routes');

var config = { docs: true };
var http = new hapi.Server('0.0.0.0', 9191, config);

http.addRoutes(routes);

http.start();