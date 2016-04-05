
var ws = new WebSocket("ws://nawashouse.com");

ws.onopen = function() {
	setTitle("This is a websocket chat");
};

ws.onclose = function() {
	setTitle("DISCONNECTED");
};

ws.onmessage = function(payload) {
	printMessage(payload.data);
};

document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    ws.send(input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
		var q = document.createElement('q');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
