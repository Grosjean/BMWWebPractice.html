$(document).ready(function() {

	$('img').mouseenter(function() {
	
		$(this).fadeTo('fast',0.75);
	
	});
	
	$('img').mouseleave(function() {
	
		$(this).fadeTo('fast',1);
		
	});
	
	
	$('input:text').focus(function () {
		if ($(this).val() == $(this).attr("title")) {
			$(this).val("");
		}
	}).blur(function () {
		if ($(this).val() == "") {
			$(this).val($(this).attr("title"));
		}
	});
	
	
	$('#submitButton').click(function () {
		
		var firstName = $('#firstNameText').val();
		var lastName = $('#lastNameText').val();
		var email = $('#emailText').val();
		
		if (firstName === "First name" || lastName === "Last name" || email === "Email Address")
		{
			$('#thanksSubmit').css("display","true");
			alert("Oops! Looks like you forgot to enter some information");
		}
		else
		{
			confirm("Thanks " + firstName + " " + lastName + ". We will contact you shortly!");
		}
	
	});
	
});





