<!DOCTYPE html>
<html>
<head>
<title>Cookie homework Sulaiman Aloraini</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="script.js"></script>
</head>
<body>
<?php
$cookie_name = "age";
$cookie_value = $_POST["age"];
setcookie($cookie_name, $cookie_value, time() + (86400 * 300), "/");
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
			<br><p>
			<h2>JavaScript cookie</h2>
			<h4>
					<script type="text/javascript">  
					document.write("Every Cookie in javascript: " + document.cookie); 
					document.write("<br><br>Every Cookie in local: " + document.cookie); 
					</script> 
					
					
			</h4>
				
			</p>
			
			</div>
			<div class="col-md-4">
			<br>
			
			<p> 
			<h2>PHP cookie</h2>
			<?php
				if(!isset($_COOKIE[$cookie_name])) {
					  echo "Cookie named '" . $cookie_name . "' is not set!";
				} elseif ($cookie_value < 19 || !(is_numeric($cookie_value))){
					echo "<h4><code>we're sorry your age is less than 20 years old  or it's string??</code></h4>";
				} else {
					  echo "Age is :  ".$_COOKIE[$cookie_name];
				}
			?>
			</p>
			</div>
			<div class="col-md-4"></div>
		</div>
	</div>



</body>
</html>

