<?php
function printFloydTriangle($n) {
    $num = 1;
    for ($i = 0; $i < $n; $i++) {
        for ($j = 0; $j <= $i; $j++) {
            echo $num . " ";
            $num++;
        }
        echo "<br>";
    }
}


printFloydTriangle(4);

?>
