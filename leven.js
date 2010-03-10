/*
	Password Confirmation Bar Demo
	(c)2010. Ivan Tam. ivan@hipnik.net
	
	The password confirmation bar alerts the user to how
	close they are to getting their password and password
	confirmation to match up.
	
	The bar is based on the Levenshtein distance between
	the strings and normalized by dividing the distance
	by the length of the password.
	
*/

// standard alias
$ = function(id) { return document.getElementById(id); },

// 
meterBar = function() {
  var a = $('password').value;
  var b = $('confirmation').value;
	var distance = levenshteinenator( a,b );
	
	var bar = $('bar');
	var msgbox = $('message');
		
	var barwidth = ( 1 - (distance / a.length) ) * 100;

	if ( (barwidth == 100) && (a == b) ) {
		bar.style.background = "green";
		msgbox.innerHTML = "Password confirmed!";
	} else msgbox.innerHTML = "";
	
	if (barwidth < 100) {
		bar.style.background = "orange";
	}
	if (barwidth < 33) {
		bar.style.background = "red";
	}
		
	// minimum bar width is 1%
	if (barwidth < 1) { barwidth = 1; }
	
	bar.style.width = barwidth + "%";
},

// reset all the notifications.
resetConfirmation = function() {
	var confirm = document.getElementById('confirmation');
	confirm.value="";
	$('bar').style.width="1%";
	$('message').innerHTML="";
}