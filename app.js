const Server = require('./models/server');

require('dotenv').config();

server = new Server();

server.listen();