<?php

    define('Soynuevo','Datos en constante');
    define('conexion','Soy el SQL');
    //conexion a base de datos
    //la url
    //username
    //parametros
    define('Soynuevoarreglo',
        [12, true, "datos"]
    );

    function conectarbd(){
        echo conexion;
    }

    echo Soynuevo;
    echo '<br>';
    var_dump(Soynuevoarreglo);
    echo '<br>';
    conectarbd();
?>