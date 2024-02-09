<?php
function is_palindrome($str) {
    $str = strtolower(preg_replace("/[^a-z0-9]+/i", "", $str));
    $len = strlen($str);

    for ($i = 0; $i < $len / 2; $i++) {
        if ($str[$i] != $str[$len - $i - 1]) {
            return false;
        }
    }

    return true;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $str = $_POST['str'];
    if (is_palindrome($str)) {
        echo "<p>The string <b>" . $str . "</b> is a palindrome.</p>";
    } else {
        echo "<p>The string <b>" . $str . "</b> is not a palindrome.</p>";
    }
}
?>
