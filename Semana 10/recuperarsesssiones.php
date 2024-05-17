<?php
session_start();

if ( $_SESSION["datosdeuso"] != null){
    echo "estoy conectado";
}
else{
    echo "No estoy conectado";
}

?>