
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// // Get the error elements
	// var errorName = document.getElementById("errorName");
	// var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value === "" || fName.value.length < 3 || fName.value.match(/^[a-zA-Z]+$/)){
		$("#fName").addClass("alert-warning").text("Please enter a valid name");
		//error++;
	}

	if(fEmail.value === "" || fEmail.value.length < 3 || fEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/
	)){
		$("#fEmail").addClass("alert-warning").text("Please enter a valid email address");
		// error++;
	}

	if(fAddress.value === "" || fAddress.value.length < 3){
		$("#fAddress").addClass("alert-warning").text("Please enter a valid address");
		// error++;
	}

	if(fLastN.value === "" || fLastN.value.length < 3 || fLastN.value.match(/^[a-zA-Z]+$/)){
		$("#fLastN").addClass("alert-warning").text("Please enter a valid Last Name");
		//error++;
	}
	
	if(fPassword.value === "" || fPassword.value.length < 3 || fPassword.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	)){
		$("#fPassword").addClass("alert-warning").text("Please enter Password with at least one number or letter");
		//error++;
	}

	if(fPhone.value === "" || fPhone.value.length < 3 || isNaN(fPhone.value)){
		$("#fPhone").addClass("alert-warning").text("Please enter a valid Phone Number");
		//error++;
	}




	// if(error>0){
	// 	alert("Error");
	// }else{
	// 	alert("OK");
	// }

}
