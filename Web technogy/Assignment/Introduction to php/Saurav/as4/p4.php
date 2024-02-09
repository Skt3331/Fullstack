<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];

    // transform name to uppercase
    $name_upper = strtoupper($name);
   // capitalize the first letter of the name
    $name_capitalized = ucfirst($name);

    echo "<p>Uppercase: <b>" . $name_upper . "</b></p>";
    echo "<p>Capitalized: <b>" . $name_capitalized . "</b></p>";
}
?>
