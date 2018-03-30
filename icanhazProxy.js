const https = require('https');
const http = require('http');
const util = require('util');

const iCanHazoptions = {
  hostname: 'icanhazdadjoke.com',
  port: 443,
  path: '/',
  method: 'GET',
  headers: {
	"Accept": "application/json"
  }
};




http.createServer(function(r, resp){
	
	console.log('accepting request')
	
	
	const icanHazRequest = https.request(iCanHazoptions, (res) => {

	  res.on('data', (d) => {
		resp.setHeader('Content-Type', 'application/json');
		resp.write(d);
		resp.end();
	  });
	});

	icanHazRequest.on('error', (e) => {
	  console.error(e);
	});
	
	icanHazRequest.end();
	
	
	
	
}).listen(8011);







