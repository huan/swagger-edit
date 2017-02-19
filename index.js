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
	console.log(server.address());
});
