<!DOCTYPE html>
<html>
<head>
    <title>Multiplication Table</title>
</head>
<body>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
        Enter a number: <input type="text" name="num">
        <input type="submit" value="Generate Table">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num = $_POST['num'];
        echo "<table border='1'>";
        for ($i = 1; $i <= 10; $i++) {
            echo "<tr>";
            echo "<td>" . $num . " x " . $i . " = </td>";
            echo "<td>" . $num * $i . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    }
    ?>
</body>
</html>