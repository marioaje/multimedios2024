<?php

class Database{
   private  $host ="srv863.hstgr.io";
   private   $password = "#5?Sf1p0Vh";
   private   $username = "u484426513_multimedios012";
   private   $db_name = "u484426513_multimedios012";
   public $conn;

   public function getConn(){
    $this->conn = null;

    try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8"); // Asegura la codificación UTF-8
        } catch (PDOException $exception) {
            echo "Error de conexión: " . $exception->getMessage();
        }

        return $this->conn;
   }

   public function checkConn(){
        if($this->conn){
            echo "conectado";
        }
        else{
            echo 'Fuera de servicio';
        }
   }

   public function getUsuarios(){
    //SELECT `id`, `nombre`, `apellidos`, `fechaactualizacion` FROM `usuarios` WHERE 1
    if($this->conn){
        $query = "SELECT `id`, `nombre`, `apellidos`, `fechaactualizacion` FROM `usuarios`";

        $stm = $this->conn->prepare($query);
        $stm->execute();

        $resultado = $stm->fetchAll(PDO::FETCH_ASSOC);

        return $resultado;

    }
    else{
        echo 'Fuera de servicio';
    }
   }

}

$database = new Database();
$conn = $database->getConn();
$database->checkConn();
echo "<br>";
$variableusuarios = $database->getUsuarios();

if ($variableusuarios){
    echo "<pre>";
    print_r($variableusuarios);
    echo "</pre>";
}
else{
    echo "<pre>Sin registros";
    echo "</pre>";
}

//u484426513_multimedios012

    //........
    //2-conectarme
    //3-trycatch



?>