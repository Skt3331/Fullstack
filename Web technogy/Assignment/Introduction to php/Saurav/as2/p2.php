<?php
function count_vowels($str) {
    $vowels = array('a', 'e', 'i', 'o', 'u');
    $count = array(0, 0, 0, 0, 0);
    $total_vowels = 0;

    for ($i = 0; $i < strlen($str); $i++) {
        $char = strtolower($str[$i]);
        if (in_array($char, $vowels)) {
            $count[array_search($char, $vowels)]++;
            $total_vowels++;
        }
    }

    return array($total_vowels, $count);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $str = $_POST['str'];
    list($total_vowels, $count) = count_vowels($str);

    echo "<table align=center border=1>";
    echo "<tr><td> <b>Vowel</b> </td><td> <b>Count</b> </td></tr>";

    for ($i = 0; $i < count($count); $i++) {
        echo "<tr><td>" . chr(97 + $i) . "</td><td>" . $count[$i] . "</td></tr>";
    }

    echo "<tr><th colspan=2>Total vowels</th></tr>";
    echo "</table>";
}
?>