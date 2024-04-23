//Propiedades Inicio
let datosTabla = document.querySelector('#datos');//Cuando es queryselector requiere el #
let mensajesSistema =  document.querySelector('#mensajesSistema');
let formulario = document.getElementById('formulario');//Cuando es id, no requiere el #
let formularioEditar = document.getElementById('formularioEditar');

let nombrePagina = document.title;
let nombreModuloListar = "Usuarios";
let nombreModuloCrear = "Crear Usuarios";

let url = "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaUsuarios.php";
let insertar = "InsertarUsuarios.php";
let actualizar = "ActualizarUsuarios.php";

// ocupo json

let spinner = `
<button class="btn btn-success" type="button" disabled>
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>
</button>`;

//Propiedades Fin


//Eventos Inicio
if ( nombrePagina == nombreModuloCrear ){
    formulario.addEventListener('submit', 
    function(evento) {
        evento.preventDefault();//evita que la pagina se recargue
        
        let datos = new FormData(formulario);
        
        let datosEnviar = {
            name: datos.get('name'),
            password: datos.get('password'),
            email: datos.get('email')
        }

        //url + insertar esto es la url del servicio concatenada
        fetch( url + insertar,
            {
                method: 'POST',
                body: JSON.stringify(datosEnviar)
            } 
        )
        .then(respuesta=>respuesta.json())
        .then( (datosrepuesta) => {
            //console.log(datosrepuesta)
            mensajeInsertar(datosrepuesta)
        })
        .catch(console.log)

    })
}


formularioEditar.addEventListener('submit', 
function(evento) {
    evento.preventDefault();//evita que la pagina se recargue
    
    let datos = new FormData(formularioEditar);

    let datosEnviar = {
        name: datos.get('name'),
        password: datos.get('password'),        
        id: datos.get('id')
    }
    console.log(datosEnviar);

        //url + insertar esto es la url del servicio concatenada
        fetch( url + actualizar,
            {
                method: 'POST',
                body: JSON.stringify(datosEnviar)
            } 
        )
        .then(respuesta=>respuesta.json())
        .then( (datosrepuesta) => {
            mensajeActualizar(datosrepuesta)
        })
        .catch(console.log)

 
})

//Eventos Fin


//Metodos Inicio
function mensajeInsertar(datos){
    if(datos.code == 200){        
        mensajesSistema.innerHTML = `<div
                class="alert alert-success alert-dismissible fade show"
                role="alert"
            >
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
                <strong>Ingreso exitoso</strong>
            </div>`;
    }
    else{
        mensajesSistema.innerHTML = `<div
                class="alert alert-warning alert-dismissible fade show"
                role="alert"
            >
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
                <strong>Correo duplicado</strong>
            </div>`;
    }
}

function mensajeActualizar(datos){
    if(datos.code == 200){        
        mensajesSistema.innerHTML = `<div
                class="alert alert-success alert-dismissible fade show"
                role="alert"
            >
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
                <strong>Actualizacion exitosa</strong>
            </div>`;

        setTimeout(cargarDatos, 3000);    
    }
    else{
        mensajesSistema.innerHTML = `<div
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
            >
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
                <strong>Error al actualizar</strong>
            </div>`;
    }
}


function cargarDatos(){
    datosTabla.innerHTML = "";
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
        //onclick="editar('${iterator.id}', '${iterator.name}', '${iterator.password}', '${iterator.email}')"
            datosTabla.innerHTML += `
                <tr class="">
                    <td>
                    <a
                        name=""
                        id=""
                        class="btn btn-success"
                        onclick="editar('${encodeURIComponent(JSON.stringify(iterator))}')"
                        role="button"
                        ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg></a
                    >                    
                    
                    <a
                        name=""
                        id=""
                        class="btn btn-danger"                        
                        role="button"
                        onclick="eliminar('${iterator.id}')"
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
//onclick="editar('${iterator.id}', '${iterator.name}', '${iterator.password}', '${iterator.email}')"
//function editar(id, name, password, email) {
function editar(objeto) {
    let modalEditar = new bootstrap.Modal(document.getElementById("modalEditar"));
    modalEditar.show();

    
    objeto = JSON.parse(decodeURIComponent(objeto));
    
    document.getElementById("id").value = objeto.id;
    document.getElementById("name").value = objeto.name;
    document.getElementById("email").value = objeto.email;
    document.getElementById("password").value = "";
    document.getElementById("ideditar").innerHTML = objeto.id;


}

function eliminar(id){
    document.getElementById("idEliminar").innerHTML = id;
    document.getElementById("idEliminarModal").value = id;
    
    let modalEliminar = new bootstrap.Modal(document.getElementById("modalEliminar"));
    modalEliminar.show();
}

function modalEliminarConfirmacion(){
    //document.getElementById("idEliminarModal").value
}

//Metodos Fin

//Seccion de ejecucion de funciones
if (nombrePagina == nombreModuloListar ){
    cargarDatos();
}
