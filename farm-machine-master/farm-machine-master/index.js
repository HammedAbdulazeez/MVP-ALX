const env = require('dotenv').config()
env
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 2222;
const host = process.env.HOST || 'localhost'
const url = `${host}:${port}/tools`

server.listen(port);
exports = env