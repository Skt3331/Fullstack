
<html>
<body>
<form method="get" >
<label> Enter a number:</label>
<input type="text" name="number">
</form>
</body>
<?php
$num = $_GET["number"];

$result = ($num > 30) ? "Greater than 30" : (($num > 20) ? "Greater than 20" : (($num > 10) ? "Greater than 10" : "Less than or equal to 10"));

echo $result;
?>
