const config = require('./config');
const Server = require('./server');

const server = new Server();
server.run(config.port);
