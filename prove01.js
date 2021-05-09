const http = require('http');
const routes = require('./routes');

var dummy_users = routes.dummy_users;

const server = http.createServer(routes.routeHandler);


server.listen(3000);