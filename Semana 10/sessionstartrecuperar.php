<?php

session_start();


if ($_SESSION["datoslogin"] != null){
    echo "Tengo datos: ".$_SESSION["datoslogin"];
}else{
    echo "no tengo datos";
}



?>