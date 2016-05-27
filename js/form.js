var sendForm = document.querySelector("#send");

var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var messageInput = document.querySelector("#message");

var nameMessage = document.querySelector("#name-message");
var emailMessage = document.querySelector("#email-message");
var messageMessage = document.querySelector("#message-message");

var namePattern = new RegExp("^[a-zA-Z .'-]{1,200");
var emailPattern = new RegExp("^[a-zA-Z@ .'-]{1,100");
var mesagePattern = new RegExp("{10,2000");




sendForm.onsubmit = function(event){

var totalErrors = 0;	

	if(namePattern.test(nameInput.value)){
		nameMessage.innerHTML = " ";
	} else {
		nameMessage.innerHTML = "* Please enter a name";
		totalErrors ++;
	}	

	if(emailPattern.test(emailInput.value)){
		emailMessage.innerHTML = " ";
	} else {
		emailMessage.innerHTML = "* Please enter your email Address";
		totalErrors ++;
	}

	if(messagePattern.test(messageInput.value)){
		messageMessage.innerHTML = " ";
	} else {
		messageMessage.innerHTML = "* Please type your message";
		totalErrors ++;
	}

	if (totalErrors > 0) {
		event.preventDefault();
	}

}

$(function(){

	$("#submit").click(function(){

		var date = $("#send").serializeArray();
		console.log (date);

		$.each(date, function(i, obj){

			console.log(i, obj);

				localStorage.setItem(obj.name, obj.value)
		});
	});
});























