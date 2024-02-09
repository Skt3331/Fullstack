<?php
function displaySourceCode($url) {
    $content = file_get_contents($url);
    if ($content === false) {
        echo "Failed to fetch the webpage.";
        return;
    }
    $lines = explode("\n", $content);
    $lineNumber = 1;
    foreach ($lines as $line) {
        echo $lineNumber . " " . htmlspecialchars($line) . "<br>";
        $lineNumber++;
    }
}

// Display source code of a webpage
displaySourceCode('http://localhost/mayur/as3/p3.html');
?>
