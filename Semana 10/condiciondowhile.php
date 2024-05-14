<?php

    error_reporting(-1);
    error_reporting(0);
    error_reporting(E_ALL);
    ini_set('error_reporting', E_ALL);


    echo 'DoWhile <br>';

    $variable = 1;


    do {
        echo "El numero nuevo es: $variable <br>";
        $variable++;
    }while ($variable < 10);

?>