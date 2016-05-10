var port = 3002;
var app = require('express')();

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));
app.use(require('stylus').middleware(require('path').join(__dirname, 'public')));
app.use(require('express').static('public'));

/*require('http').createServer(app).listen(port,function(){
  console.log('server is running you beeezy, on port', port)
});
*/
var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({server: require("http").createServer(app).listen(port,function(){
  console.log('server is running you beeezy, on port', port)
})});

wss.on("connection", function(ws) {

	ws.on("message", function(message) {

	if (message === 'exit') {
	   ws.close();
	} else {

	wss.clients.forEach(function(client) {
		client.send(message);
	});

}

	});

	ws.send("Web socket is open");

});

console.log("Web socket is running")
