$(document).ready(function(){

	$("#menu").click(function(){
		$("nav ul").slideToggle({"display" : "block"});
	});


	$(".controle").click(function(){
		var headding =$(this).attr('id');
		$(".box").not($(this).next('.box')).slideUp();
		$(this).next(".box").slideToggle(500,function(){
			window.location.hash='#'+headding;
		});
		
	});

});
















