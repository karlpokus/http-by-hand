#!/usr/bin/env node

const http = require('http');
const srv = http.createServer();
const PORT = 8989;

srv.keepAliveTimeout = 0; // disable connection timeout; default 5 secs
srv.setTimeout(5 * 60 * 1000) // prolong socket timeout to 5 mins; default 2 mins

const router = {
	go: function(req, res) {
		this[req.method](req, res);
	},
	'GET': function(req, res) {
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end('hi');
	},
	'POST': function(req, res) {
		req.pipe(res);
	}
};

srv
	.on('request', router.go.bind(router))
	.listen(PORT, () => { console.log(`http server listening on port ${ PORT }`) })
