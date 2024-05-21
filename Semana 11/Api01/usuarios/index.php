<?php   

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once "../config/db.php";

$database = new Database();
$db = $database->getConn();

$request_method = $_SERVER["REQUEST_METHOD"];


switch ($request_method) {

    case 'POST':
        crearUsuario();
        break;
    case 'PUT':
        actualizarUsuario(); 
        break;
    case 'GET':
        // if (!empty($_GET["id"])) {
        //     $id = intval($_GET["id"]);
        //     obtenerUsuario($id);
        // }else{
        //     obtenerUsuarios();
        // } lo de abajo es un if ternario

        isset($_GET["id"]) ? obtenerUsuario(intval($_GET["id"])) : obtenerUsuarios();

        break;
    case 'DELETE':
        borrarUsuarios();
        break;    
    case 'OPTIONS':
        http_response_code(200);
        break;
    default:
        http_response_code(400);
        echo json_encode(array("mensaje"=> "Metodo invalido"));
        break; 

}

function obtenerUsuarios(){
    global $db;
    $query = "SELECT `id`, `nombre`, `apellidos`, `fechaactualizacion` FROM `usuarios`";
    $stmt = $db->prepare($query);
    $stmt->execute();

    $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($items);

}


function obtenerUsuario($id){
    global $db;
    $query = "SELECT `id`, `nombre`, `apellidos`, `fechaactualizacion` FROM `usuarios` WHERE `id` = ?";
    $stmt = $db->prepare($query);
    $stmt->bindParam(1, $id);
    $stmt->execute();

    $items = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($items);

}


function crearUsuario(){
    global $db;
    $data = json_decode(file_get_contents("php://input"));

    $query = "INSERT INTO `usuarios` ( `nombre`, `apellidos`, `fechaactualizacion` )  VALUES (:nombre, :apellidos, :fechaactualizacion)";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":nombre", $data->nombre);
    $stmt->bindParam(":apellidos", $data->apellidos);
    $stmt->bindParam(":fechaactualizacion", $data->fechaactualizacion);


    if($stmt->execute()){
        http_response_code(200);
        echo json_encode(array("mensaje"=> "crear Usuario completo"));
    }else{
        http_response_code(500);
        echo json_encode(array("mensaje"=> "crear Usuario incompleto"));
    }
    
}

function actualizarUsuario(){
    global $db;
    $data = json_decode(file_get_contents("php://input"));

    $query = "UPDATE `usuarios` SET `nombre`= :nombre, `apellidos`= :apellidos, `fechaactualizacion`=:fechaactualizacion WHERE `id`=:id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":nombre", $data->nombre);
    $stmt->bindParam(":apellidos", $data->apellidos);
    $stmt->bindParam(":fechaactualizacion", $data->fechaactualizacion);
    $stmt->bindParam(":id", $data->id);


    if($stmt->execute()){
        http_response_code(200);
        echo json_encode(array("mensaje"=> "Actualizar Usuario completo"));
    }else{
        http_response_code(500);
        echo json_encode(array("mensaje"=> "Actualizar Usuario incompleto"));
    }
}


function borrarUsuarios(){
    global $db;
    $data = json_decode(file_get_contents("php://input"));

    $query = "DELETE FROM `usuarios` WHERE `id`=:id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":id", $data->id);


    if($stmt->execute()){
        http_response_code(200);
        echo json_encode(array("mensaje"=> "Borrar Usuario completo"));
    }else{
        http_response_code(500);
        echo json_encode(array("mensaje"=> "Borrar Usuario incompleto"));
    }
}

?>