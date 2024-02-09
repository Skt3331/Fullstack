<html>
<body>
<form method="get" >
<label> Enter a number:</label>
<input type="text" name="number">
</form>
</body>
<?php
$num = $_GET["number"];
$arr=array('zero','one','two','three','four','five','six','seven','eight','nine','ten');
$result=$arr[$num];
echo $result;
?>
