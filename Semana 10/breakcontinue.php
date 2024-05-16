<?php

echo "Break<br>";

for ($i = 1; $i <10; $i++) {

    if($i == 6){
        break;
    }
    echo "contador $i<br>";
}

echo "Continue<br>";

for ($i = 1; $i <10; $i++) {

    if($i == 6){
        continue;
    }
    echo "contador $i<br>";
}

?>