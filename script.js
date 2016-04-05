//check the form is vaild
function myFunction() {
	var fname = document.getElementById("fname").value;
	if(fname == "" || fname == null || !isNaN(fname)){
		alert("Error in first name");
		return false;
	}else {
		return true;
	}

	var lname = document.getElementById("lname").value;
	if(lname == "" || lname == null || !isNaN(lname)){
		alert("Error in last name");
		return false;
	}else {
		return true;
	}


	var email = document.getElementById("email").value;
	if(email == "" || email == null || !isNaN(email)){
		alert("Error in email");
		return false;
	}else {
		return true;
	}

	var mobile = document.getElementById("mobile").value;
	if(mobile == "" || mobile == null || isNaN(mobile) || mobile.length < 10){
		alert("Error in mobile");
		return false;
	}else {
		return true;
	}	
	
	CookieJavaScript();
	localS();
	
}

function CookieJavaScript(){

	// for color 

	var selectedValue = document.getElementById("color-eye").value;
	if (selectedValue != "Select Color")
	{
		document.cookie = "color=" + selectedValue +
		"; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	}


	document.cookie = "fname=" + escape(document.getElementById("fname").value) + "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	document.cookie = "lname=" + escape(document.getElementById("lname").value) + "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	document.cookie = "email=" + escape(document.getElementById("email").value) + "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	document.cookie = "address=" + escape(document.getElementById("address").value)+ "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	document.cookie = "mobile=" + escape(document.getElementById("mobile").value) + "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	document.cookie = "weight=" + escape(document.getElementById("weight").value) + "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	document.cookie = "height=" + escape(document.getElementById("height").value) + "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	document.cookie = "ciuntry2=" + escape(document.getElementById("country2").value) + "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	document.cookie = "country=" + escape(document.getElementById("country").value) + "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	document.cookie = "bdate=" + escape(document.getElementById("bdate").value) + "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";
	document.cookie = "male=" + escape(document.getElementById("male").value) + "; "+"expires=Fri, 5 Aug 2016 01:00:00 UTC;";

}
// localStorage
function localS(){
	
	var fname = document.getElementById("fname").value;
	var lname= document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var mobile= document.getElementById("mobile").value;
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	var country2 = document.getElementById("country2").value;
	var country = document.getElementById("country").value;
	var bdate = document.getElementById("bdate").value;
	var male = document.getElementById("male").value;
	
    localStorage.setItem("fname", fname);
    document.getElementById("result").innerHTML = localStorage.getItem("fname");
    
    localStorage.setItem("lname", lname);
    document.getElementById("result1").innerHTML = localStorage.getItem("lname");
    
    localStorage.setItem("email", email);
    document.getElementById("result2").innerHTML = localStorage.getItem("email");
    
    localStorage.setItem("address", address);
    document.getElementById("result3").innerHTML = localStorage.getItem("address");
    
    localStorage.setItem("mobile", mobile);
    document.getElementById("result4").innerHTML = localStorage.getItem("mobile");
    
    localStorage.setItem("weight", weight);
    document.getElementById("result5").innerHTML = localStorage.getItem("weight");
    
    localStorage.setItem("height", height);
    document.getElementById("result6").innerHTML = localStorage.getItem("height");
    
    localStorage.setItem("country2", country2);
    document.getElementById("result7").innerHTML = localStorage.getItem("country2");
    
    localStorage.setItem("bdate", bdate);
    document.getElementById("result8").innerHTML = localStorage.getItem("bdate");
    
    ocalStorage.setItem("male", male);
    document.getElementById("result9").innerHTML = localStorage.getItem("male");
    
}


//function setCookie(cname,cvalue) {
//    var d = new Date();
//    d.setTime(d.getTime() + (5*24*60*60*1000));
//    var expires = "expires=" + d.toGMTString();
//    document.cookie = cname+"="+cvalue+"; "+expires;
//}







