<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Methods: PUT, POST, DELETE, GET, OPTIONS');
    header('Access-Control-Max-Age: 3600');
    header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, Authorization, X-Requested-With');

    include_once '../config/database.php';

    $database = new DatabasesConexion();
    $db = $database->obtenerConn();


    $request_method = $_SERVER["REQUEST_METHOD"];

    switch ($request_method){

        case 'PUT':
            http_response_code(200);
            actualizarCliente();
            break;

        case 'POST':            
            insertarCliente();
            break;
                
        case 'DELETE':
            http_response_code(200);
            borrarCliente();
            break;
                    
        case 'GET':
                if (!empty($_GET["id"])){
                    $id = intval($_GET["id"]);
                    obtenerCliente($id);
                }
                else{
                    obtenerClientes();
                }
            break;
                                            
        case 'OPTIONS':
            http_response_code(200);
            break;
                            
        default:
            http_response_code(200);
            break;


    }


    function obtenerClientes(){
        
        global $db;

            $query = "SELECT `id`, `nombre`, `estado`, `fechaactualizacion` FROM `clientes`";
            $stm = $db->prepare($query);
            $stm->execute();
    
            $resultado = $stm->fetchAll(PDO::FETCH_ASSOC);
    
            echo json_encode($resultado);
        
    }

    function obtenerCliente($id){
        global $db;

            $query = "SELECT `id`, `nombre`, `estado`, `fechaactualizacion` FROM `clientes` where  `id`=?";
            $stm = $db->prepare($query);            
            $stm->bindParam(1, $id);
            $stm->execute();
    
            $resultado = $stm->fetchAll(PDO::FETCH_ASSOC);
    
            echo json_encode($resultado);
        
    
    }


    function insertarCliente(){
        global $db;
        $data = json_decode(file_get_contents("php://input"));
        
        $query = "INSERT INTO `clientes` ( `nombre`, `estado`, `fechaactualizacion` ) values ( :nombre, :estado, :fechaactualizacion)";
        $stm = $db->prepare($query);            
        $stm->bindParam(":nombre", $data->nombre);
        $stm->bindParam(":estado", $data->estado);
        $stm->bindParam(":fechaactualizacion", $data->fechaactualizacion);
   
        if($stm->execute()){
            
            echo json_encode(array("message" => "Datos ingresados correct", "code" => "success"));
        }else{
            
            echo json_encode(array("message" => "Datos ingresados incorrect", "code" => "danger"));
        }

    }


    function actualizarCliente(){
        global $db;
        $data = json_decode(file_get_contents("php://input"));
        
        $query = "UPDATE `clientes` SET `nombre`= :nombre, `estado`=:estado, `fechaactualizacion`=:fechaactualizacion where `id`=:id";
          
        $stm = $db->prepare($query);            
        $stm->bindParam(":id", $data->id);
        $stm->bindParam(":nombre", $data->nombre);
        $stm->bindParam(":estado", $data->estado);
        $stm->bindParam(":fechaactualizacion", $data->fechaactualizacion);
   
        if($stm->execute()){
            
            echo json_encode(array("message" => "Datos actualizados correct", "code" => "success"));
        }else{
            
            echo json_encode(array("message" => "Datos actualizados incorrect", "code" => "danger"));
        }

    }


    function borrarCliente(){
        global $db;
        $data = json_decode(file_get_contents("php://input"));
        
        $query = "DELETE FROM `clientes` where `id`=:id";
          
        $stm = $db->prepare($query);            
        $stm->bindParam(":id", $data->id);
   
        if($stm->execute()){
            
            echo json_encode(array("message" => "Datos eliminados correct", "code" => "success"));
        }else{
            
            echo json_encode(array("message" => "Datos eliminados incorrect", "code" => "danger"));
        }
    }



?>













