

var exampleSocket = new WebSocket("ws://127.0.0.1:8080/chat?pseudo=%27toto%27", "protocolOne");

exampleSocket.onopen = function (event) {
	  console.log(exampleSocket); 
	};
