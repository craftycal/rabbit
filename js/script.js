$(document).ready(function(){

	$("#menu").click(function(){
		$("nav ul").slideToggle({"display" : "block"})
	});

	$(".controle").click(function(){
		$(this).next(".box").slideToggle({"display" : "block"})
	});

});