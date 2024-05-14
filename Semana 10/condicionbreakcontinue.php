<?php


    echo "break <br>";


    for($i = 0; $i < 10; $i++){
        if ($i == 4){
            break;
        }
        echo "The following is: $i <br>";
    }

    echo "continue <br>";

    
    for($i = 0; $i < 10; $i++){
        if ($i == 4){
            continue;
        }
        echo "The following is: $i <br>";
    }

?>