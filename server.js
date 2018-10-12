#!/usr/bin/env node

const http = require('http');
const srv = http.createServer();
const PORT = 8989;

const router = {
	go: function(req, res) {
		this[req.method](req, res);
	},
	'GET': function(req, res) {
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end('hi');
	},
	'POST': function(req, res) {
		let data = "";

		req.on('data', chunk => {
			data += chunk;
		}).on('end', () => {
			res.writeHead(200, {'Content-Type':'text/html'});
			return res.end(`you sent me: ${ data }`);
		});
	}
};

srv
	.on('request', router.go.bind(router))
	.listen(PORT, () => { console.log(`http running on port ${ PORT }`) })
