<?php

//Declarations variables
//Estas variables globales
    $dato1 = 209393;
    $dato2 = 347234794279;
    $texto = "Mi nombre es: ";
    $boleano = true;
    $decimales = 1.2;
    $nombremio = "Mario I";

//Arrays
    $objetos = array("nombres", 1233, true, 1.342, "Fin de datos");

    function metodonuevo(){
        echo '<div
        class="alert alert-primary alert-dismissible fade show"
        role="alert"
        >
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
            <strong>Alert Heading</strong> Alert Content
        </div>';
    }

    function suma($numero1, $numero2){
        $resultadoss = $numero1 + $numero2;
        return $resultadoss;
    }

?>


<!doctype html>
<html lang="en">
    <head>
        <title>Inicio</title>
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
            <?php
                ECHO "05 de Mayo";

                metodonuevo();

                echo "La suma :".suma(9, 10);
            ?>
        </header>
        <main>




        <?php
            echo "05 de Mayo";
            echo "<br>";
            echo $texto. " ".$nombremio; //concatenando las variables
        ?>

        </main>
        <footer>
            <!-- place footer here -->
            <?php
            $resultado = $dato1 + $dato2;
            ECHo "Suma: ".  $resultado;


            echo '<div
            class="alert alert-primary alert-dismissible fade show"
            role="alert"
            >
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
                La suma de los datos es '.$resultado.'
            </div>';


            var_dump($objetos);
            
        ?>

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
