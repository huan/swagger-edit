var http = require('http');
var serveSwaggerEditor = require('serve-swagger-editor'); 

var app = serveSwaggerEditor({
	disableNewUserIntro: true,
	useBackendForStorage: true,
	useYamlBackend: true
}, process.argv[2]);

var server = http.createServer(app);

server.on('request', function (req, res) {
	res.on('finish', function () {
		console.log(res.statusCode, req.method, req.originalUrl);			
	});
});

server.listen(8080, function () {
  console.log('Docker listen on port: ' + server.address().port);
	console.log('Please open http://ip:port to edit your swagger specification file')
  console.log(`Some possible urls:
              http://${process.env['WAN_IP']}
              http://${process.env['WAN_IP']}:8080
              http://localhost
              http://localhost:8080
  `)
});
