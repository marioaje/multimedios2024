<?php

// clave zD~>EilCGd1
// Usuario u484426513_multimedios022
// db u484426513_multimedios022

    class DatabasesConexion {

        private $host = "srv863.hstgr.io";
        private $pass = 'zD~>EilCGd1';
        private $usua = "u484426513_multimedios022";
        private $database =  "u484426513_multimedios022";

        public $conectors;


        public function obtenerConn(){

            $this->conectors = null;

            try {

                $this->conectors = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database, $this->usua, $this->pass);
                $this->conectors->exec("set names utf8");
                //es para indicarle al sistema que los caracteres son de 8 bits

            }catch(Exception $e){
                    return $this->conectors;

            }
        }


        public function reviseConecccion(){
            if($this->conectors){
                echo "Conectado";
            }else{
                echo "Sin Conexion";
            }
        }


        public function obtenerClientes(){
            if($this->conectors){
                $query = "SELECT `id`, `nombre`, `estado`, `fechaactualizacion` FROM `clientes`";
                $stm = $this->conectors->prepare($query);
                $stm->execute();

                $resultado = $stm->fetchAll(PDO::FETCH_ASSOC);

                return $resultado;
            }
        }
        

    }




    $conexionhaciamysql = new DatabasesConexion();
    $conectado = $conexionhaciamysql->obtenerConn();
    $conexionhaciamysql->reviseConecccion();

    $datos = $conexionhaciamysql->obtenerClientes();
    


?>


<!doctype html>
<html lang="en">
    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
    </head>

    <body>
        <header>
            <!-- place navbar here -->
        </header>
        <main>

        <div
            class="table-responsive"
        >
            <table
                class="table table-striped table-hover table-borderless table-primary align-middle"
            >
                <thead class="table-light">
                    <caption>
                        Table Name
                    </caption>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>estado</th>
                        <th>fechaactualizacion</th>                        
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr
                        class="table-primary"
                    >
                   
                        <?php

                                if($datos){
                                    echo "<pre>";
                                                print_r($datos);
                                    echo "</pre>";
                                }
                                else{
                                    echo "<pre>sin registros</pre>";
                                }

                        ?>
                    </tr>
                </tbody>
                <tfoot>
                    
                </tfoot>
            </table>
        </div>
        


        </main>
        <footer>
            <!-- place footer here -->
        </footer>
        <!-- Bootstrap JavaScript Libraries -->
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>
