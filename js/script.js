$(document).ready(function() {

	$('img,a,.menuButton').mouseenter(function() {
		$(this).fadeTo('fast',0.75);
	});
	
	$('img,a,.menuButton').mouseleave(function() {
		$(this).fadeTo('fast',1);
	});
	
	$('input:text').focus(function () {
		if ($(this).val() == $(this).attr("value")) {
			$(this).val("");
            $(this).css("color","black");
		}
	}).blur(function () {
		if ($(this).val() == "") {
			$(this).val($(this).attr("value"));
            $(this).css("color","gray");
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
			confirm("Thanks " + firstName + " " + lastName + ". We will contact you shortly!\n\nJust kidding, this feature does not really work yet :(");
		}
	
	});
    
    $('.menuButton').mouseenter(function() {
        
        $(this).effect('bounce', {times:2}, 200);
    
    });

    
});





