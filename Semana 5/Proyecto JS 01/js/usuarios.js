let datos = document.querySelector('#datos');
let url = "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaUsuarios.php";
// ocupo json
// leer el api
//https://paginas-web-cr.com/Api/apis/ListaUsuarios.php

let spinner = `
<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>
</button>`;


function cargarDatos(){
    //url + listar esto es la url del servicio concatenada
    fetch( url + listar )
    .then(respuesta=>respuesta.json())
    .then( (datosrepuesta) => {
        console.log(datosrepuesta)
        mostrarDatos(datosrepuesta)
    })
    .catch(console.log)
}

function mostrarDatos(datos){
    console.log(datos);
    if(datos.code == 200){
        //alert("Cargando datos");
        document.getElementById("spinnerload").innerHTML = spinner;
    }
    else{
        alert("Algo salio mal");
    }
}

//Seccion de ejecucion de funciones
cargarDatos();