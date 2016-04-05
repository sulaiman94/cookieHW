<!DOCTYPE html>
<html>
<head>
<title>Cookie HomeWork</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script type="text/javascript" src="script.js"></script>
</head>
<body>


	<?php
	$cookie_fname = "fname";
	$cookie_fname_value = $_POST ["fname"];
	
	$cookie_lname = "lname";
	$cookie_lname_value = $_POST ['lname'];
	
	$cookie_male = "male";
	$cookie_male_value = $_POST ['male'];
	
	$cookie_bdate = "bdate";
	$cookie_bdate_value = $_POST ['bdate'];
	
	$cookie_coloreye = "color-eye";
	$cookie_coloreye_value = $_POST ['color-eye'];
	
	$cookie_sa = "country";
	$cookie_sa_value = $_POST ['sa'];
	
	$cookie_yourimage = "yourimage";
	$cookie_yourimage_value = $_POST ['yourimage'];
	
	$cookie_height = "height";
	$cookie_height_value = $_POST ['height'];
	
	$cookie_weight = "weight";
	$cookie_weight_value = $_POST ['weight'];
	
	$cookie_email = "email";
	$cookie_email_value = $_POST ['email'];
	
	$cookie_mobile = "mobile";
	$cookie_mobile_value = $_POST ['mobile'];
	
	$cookie_address = "address";
	$cookie_address_value = $_POST ['address'];
	
	setcookie ( $cookie_fname, $cookie_fname_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_lname, $cookie_lname_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_male, $cookie_male_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_bdate, $cookie_bdate_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_coloreye, $cookie_coloreye_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_sa, $cookie_sa_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_yourimage, $cookie_yourimage_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_height, $cookie_height_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_weight, $cookie_weight_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_email, $cookie_email_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_mobile, $cookie_mobile_value, time () + (86400 * 300), "/" );
	setcookie ( $cookie_address, $cookie_address_value, time () + (86400 * 300), "/" );
	?>
	<div class="container">
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-4">
				<h2>Cookie Homework</h2>
				<h4>By sulaiman Aloraini</h4>
				<h4>Process.php</h4>
			</div>
			<div class="col-md-4"></div>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<br>
				<h2>JavaScript cookie</h2>
				<h4>
					<script type="text/javascript">  
					document.write("Every Cookie in javascript: " +document.cookie); 
					</script>


				</h4>
				
				<div>
					<h3 id="result1"></h3>
					<h3 id="result2"></h3>
					<h3 id="result3"></h3>
					<h3 id="result4"></h3>
					<h3 id="result5"></h3>
					<h3 id="result6"></h3>
					<h3 id="result7"></h3>
					<h3 id="result8"></h3>
					<h3 id="result9"></h3>
				</div>
				
			</div>
			<div class="col-md-4">
				<br>

				<p>
				
				
				<h2>PHP cookie</h2>
			<?php
			$cookieArray = array (
					$cookie_fname,
					$cookie_lname,
					$cookie_male,
					$cookie_bdate,
					$cookie_coloreye,
					$cookie_sa,
					$cookie_yourimage,
					$cookie_height,
					$cookie_weight,
					$cookie_email,
					$cookie_mobile,
					$cookie_address 
			);
			
			echo "<h3>First Name</h3> : " . $_COOKIE [$cookieArray [0]] . "<br>" . "<h3>Last Name : </h3>" . $_COOKIE [$cookieArray [1]] . "<br>";
			echo "<h3>Gender : </h3>" . $_COOKIE [$cookieArray [3]] . "<br>" . "<h3>Birth Date :</h3> " . $_COOKIE [$cookieArray [4]] . "<br>";
			echo "<h3>Country : </h3>" . $_COOKIE [$cookieArray [5]] . "<br>" . "<h3>yourimage : </h3>" . $_COOKIE [$cookieArray [6]] . "<br>";
			echo "<br>" . "<h3>height :</h3> " . $_COOKIE [$cookieArray [7]] . "<br>" . "<h3>weight : </h3>" . $_COOKIE [$cookieArray [8]] . "<br>";
			echo "<h3>email :</h3>" . $_COOKIE [$cookieArray [9]] . "<br>" . "<h3>mobile : </h3>" . $_COOKIE [$cookieArray [10]] . "<br>";
			echo "<h3>Address :</h3>" . $_COOKIE [$cookieArray [11]] . "<br>";
			
			?>
			
			</div>
			<div class="col-md-4"></div>
		</div>
	</div>
</body>
</html>