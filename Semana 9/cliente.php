<?php

    class Cliente{
        public $id;
        public $nombre;
        
        public $apellidos;

        public function __construct($id, $nombre, $apellidos){
            $this->id = $id;
            $this->nombre = $nombre;
            $this->apellidos = $apellidos;
        }


        public function setnombre($nombre){
            $this->nombre = $nombre;
        }

        public function setapellidos($apellidos){
            $this->apellidos = $apellidos;
        }

        public function getnombre(){
            return $this->nombre;
        }

        public function getapellidos(){
            return 6+9;
        }


    }


    $mario = new Cliente(123, "Mi nombre es Mario", "Jimenez");

    var_dump($mario);
    echo "<br>";
    echo $mario->getnombre();
    echo "<br>";
    echo $mario->getapellidos();
    echo "<br>";
    echo $mario->setnombre("Mario");
    echo "<br>";
    echo $mario->getnombre();
    echo "<br>";
?>