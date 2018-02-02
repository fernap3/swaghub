//import * as restify from "restify";
//import * as dotenv from "dotenv";
let restify = require("restify");
let dotenv = require("dotenv");
let serveStatic = require('serve-static-restify');

dotenv.config();

let server = restify.createServer({name: "http server"});
// let server = restify.createServer({
// 	name: "https server",
// 	key: fs.readFileSync('server.key'),
// 	certificate: fs.readFileSync('server.crt')
// });

server.use(restify.plugins.bodyParser({}));
server.use(restify.plugins.queryParser());


server.get(/.*/, restify.plugins.serveStatic({
	directory: "client/",
	default: '/index.html'
}));

server.listen(8080, () => {
	console.log('%s listening at %s', server.name, server.url);
});
