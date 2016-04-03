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

