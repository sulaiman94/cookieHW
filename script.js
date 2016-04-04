/* function createCookie(newCookie) {

var expDate = new Date();

expDate.setMonth(expDate.getMonth() + 1);    	// Adds 1 month ahead as the expiration date

var cookieVal = document.getElementById(newCookie).value;

// Retrieves cookie value from the node that was past to the function

document.cookie = newCookie + "=" + cookieVal + expDate.toGMTString();    	// Creates the cookie

}
 */
function myFunction() {
	var x, text;

	
	x = document.getElementById("age").value;

	// If x is Not a Number or less than 19
	if (isNaN(x) || x < 19) {
		alert("wrong input")
		return false;
	} else {
	
			var expDate = new Date();

			expDate.setMonth(expDate.getMonth() + 1);    	// Adds 1 month ahead as the expiration date

			var cookieVal = document.getElementById(x).value;

			// Retrieves cookie value from the node that was past to the function

			document.cookie = x + "=" + cookieVal + expDate.toGMTString();    	// Creates the cookie

	}

}

function locals(){
	
	// Check browser support
	var x = document.getElementById("age").value;
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("userAge", x);
    // Retrieve
    document.cookie = localStorage.getItem("userAge");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

}

function validateFn() {
    var x = document.forms["frm"]["fname"].value;
    if (x == null || x == "" || isNaN) {
        alert("Name must be filled out");
        return false;
    }
}

function validateLn() {
    var x = document.forms["frm"]["lname"].value;
    if (x == null || x == "" || isNaN) {
        alert("Name must be filled out");
        return false;
    }
}

function validateAddress() {
    var x = document.forms["frm"]["address"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function validateMobile() {
    var x = document.forms["frm"]["mobile"].value;
    if (x == null || x == "" || !isNaN || x.length < 10) {
        alert("Name must be filled out");
        return false;
    } else {
		alert("done");
	}
}

function validateEmail() {
    var x = document.forms["frm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}

