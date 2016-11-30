$(function(){

	$("form#form_diz").validate({
		errorPlacement: function(error, element) {},
		debug: false,
		rules: {
			'phone':{
				required: true,								
			},				
		},
		submitHandler: function(form) {
			sendMail(form);
		}
	});	

	$("form#form_manager").validate({
		errorPlacement: function(error, element) {},
		debug: false,
		rules: {
			'name':{
				required: true,								
			},	
			'email':{
				required: true,								
			},
			'question':{
				required: true,
			},
		},
		submitHandler: function(form) {
			sendMail(form,'manager');
		}
	});	

	$("form#form_zakaz").validate({
		errorPlacement: function(error, element) {},
		debug: false,
		rules: {
			'phone':{
				required: true,								
			},				
		},
		submitHandler: function(form) {
			sendMail(form,'zakaz');
		}
	});	


				
	function sendMail(form, message) {   
		   		
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(form).serialize(),

			success: function(html) {
				$('.popup__designer-call').fadeOut(500);
				$('.popup__order--active').fadeOut(500);
				$('.popup-bg').fadeIn(800);
				$('.popup__designer-submit').fadeIn(500);
		
							
			}	
		});		
	}



});
	
