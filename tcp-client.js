#!/usr/bin/env node

const net = require('net');
const HOST = process.argv[2];
const PORT = process.argv[3];
const client = net.connect(PORT, HOST);

client
	.on('connect', () => {
		console.log(`tcp client connected to ${ PORT }`);
		process.stdin.pipe(client);
		client.pipe(process.stdout);
	})
	.on('error', err => console.error(err))
	.on('close', () => {
		console.log('connection closed')
		process.exit(0);
	})
	.on('timeout', () => console.log('timed out'))
	.on('end', () => console.log('connection ended'))
