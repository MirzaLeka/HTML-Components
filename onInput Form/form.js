
var nameInput = ""; 
var errorMsg = ""; 

/* If you hit ENTER key while being in form you'll trigger the functiom submit() */
document.getElementById("nameInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      submit();
    }
});

/* Function is called when user starts typing inside input thanks to HTML oninput event */
function changeBtnColor() {
	nameInput = document.getElementById("nameInput").value; 
	errorMsg = document.getElementById("error");

	if (nameInput == "") {
		errorMsg.innerHTML = "Please enter name";
		document.getElementById("btn-continue").style.background = "#D50000";
		$("button").find($(".fa")).removeClass('fa fa-arrow-right').addClass('fa fa-close');
	}

	else if (nameInput.length > 16) {
		errorMsg.innerHTML = "Keep your name below 16 characters";
		document.getElementById("btn-continue").style.background = "#D50000";
	$("button").find($(".fa")).removeClass('fa fa-arrow-right').addClass('fa fa-close');
}

	/* If there is not a single character in input this will be called */
	else if (/^\s*$/.test(nameInput)) {
		errorMsg.innerHTML = "Nice try. Add some characters";
		$("button").find($(".fa")).removeClass('fa fa-arrow-right').addClass('fa fa-close');
		document.getElementById("btn-continue").style.background = "#D50000";
	}

	else {
	document.getElementById("btn-continue").style.background = "#64DD17";
		errorMsg.innerHTML = "";
		$("button").find($(".fa")).removeClass('fa fa-close').addClass('fa fa-arrow-right');	
	}

}

/* This funciton is called when click a button or hit Enter */
function submit() {

	errorMsg = document.getElementById("error");

	if (nameInput == "") {
		errorMsg.innerHTML = "Please enter name";
		$("button").find($(".fa")).removeClass('fa fa-arrow-right').addClass('fa fa-close');
		document.getElementById("btn-continue").style.background = "#D50000";
	}

	else if (nameInput.length > 16) {
		document.getElementById("btn-continue").style.background = "#D50000";
	}

	else if (/^\s*$/.test(nameInput)) {
		document.getElementById("btn-continue").style.background = "#D50000";
	}


	else {
		$("button").find($(".fa")).removeClass('fa fa-close').addClass('fa fa-arrow-right');	
		errorMsg.innerHTML = "Correct!";
	}


}

