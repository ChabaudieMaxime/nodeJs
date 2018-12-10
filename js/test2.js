

$(document).ready(function () {
	
	nom=prompt("quel est votre nom ?");
	
	var exampleSocket = new WebSocket("ws://127.0.0.1:8080/chat?pseudo="+nom, "protocolOne");
	
	exampleSocket.addEventListener("open",function (event) {
	exampleSocket.send("@@connect");
		})
		
	$("#bouttonEnvoyer").on("click", function(event) {
	
		if ($("#messageText").val()!="") {
			
			exampleSocket.send($("#messageText").val());
		}
	return false;
});
	
	exampleSocket.addEventListener("message",function (event) {
		
		let Json=JSON.parse(event.data);
		
		if (Json.texte=="@@connect") {
			
			$("#chat_body").append("<p><b>"+Json.emetteur+"</b> s'est connecté</p>");
			$("#user_body").append("<div class=\"row justify-content-center\">"+Json.emetteur+"</div>");
			
		} else if (Json.texte=="@@quit") {
			
			$("#chat_body").append("<p><b>"+Json.emetteur+"</b> est parti</p>");
			
		} else {
			
			$("#chat_body").append("<p><b>"+Json.emetteur+"</b> : "+Json.texte+"</p>");
		}

	});
	
	exampleSocket.addEventListener("onclose", function (event) {
		$("#chat_body").append("<p><b>"+Json.emetteur+"</b> s'est connecté</p>");
		
	});
	
	}
);

