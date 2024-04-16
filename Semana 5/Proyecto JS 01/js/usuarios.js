let datosTabla = document.querySelector('#datos');
let url = "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaUsuarios.php";
// ocupo json
// leer el api
//https://paginas-web-cr.com/Api/apis/ListaUsuarios.php

let spinner = `
<button class="btn btn-success" type="button" disabled>
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>
</button>`;


function cargarDatos(){
    loadspinner();
    
    //url + listar esto es la url del servicio concatenada
    fetch( url + listar )
    .then(respuesta=>respuesta.json())
    .then( (datosrepuesta) => {
        //console.log(datosrepuesta)
        mostrarDatos(datosrepuesta)
    })
    .catch(console.log)
}

function mostrarDatos(datos){
    //console.log(datos);
    
    if(datos.code == 200){
        for (const iterator of datos.data) {
            
            datosTabla.innerHTML += `
                <tr class="">
                    <td>
                    <a
                        name=""
                        id=""
                        class="btn btn-success"
                        
                        role="button"
                        ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg></a
                    >                    
                    
                    <a
                        name=""
                        id=""
                        class="btn btn-danger"
                        
                        role="button"
                        ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eraser"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" /><path d="M18 13.3l-6.3 -6.3" /></svg></a
                    >
                    </td>
                    <td scope="row">${iterator.id}</td>
                    <td>${iterator.name}</td>
                    <td>${iterator.email}</td>
                    <td>${iterator.password}</td>                    
                </tr>
                `;
        }
    }
    else{
        alert("Algo salio mal");
    }

    document.getElementById("spinnerload").innerHTML = "";
}

function loadspinner(){
    document.getElementById("spinnerload").innerHTML = spinner;
}

//Seccion de ejecucion de funciones
cargarDatos();