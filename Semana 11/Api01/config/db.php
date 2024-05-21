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

}

?>