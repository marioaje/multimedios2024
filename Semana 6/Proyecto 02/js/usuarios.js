//Propiedades
let tablausuarios = document.querySelector("#tablausuarios");
let mensajes = document.querySelector("#mensajes");

let url =  "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaUsuarios.php";
let insertar = "InsertarUsuarios.php";
let actualizar = "ActualizarUsuarios.php";

let formulario = document.getElementById("formulario");
let formularioEditar = document.getElementById("formularioEditar");

let nombrePaagina = document.title;
let listarPagina = "Listar Usuarios";
let crearPagina = "Crear";

let spinner = `
            <button
            class="btn btn-primary"
            type="button"
            disabled
            >
            <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
            ></span>
            Loading...
            </button>`;

if (nombrePaagina == crearPagina){

formulario.addEventListener("submit",
    function(evento){
        evento.preventDefault();//evita la recarga de la pagina
      
        let datos = new FormData(formulario);

        let datosEnviar =
        {
            name: datos.get('name'),
            password: datos.get('password'),
            email: datos.get('email')
        };

        fetch ( url + insertar,
            {
                method: 'POST',
                body: JSON.stringify(datosEnviar)
            }
        ) 
        .then( repuesta=> repuesta.json() )
        .then ( (datosrepuestas) => {
            insertarDatos(datosrepuestas)
          
        })
        .catch(console.log)

    })
}


if (nombrePaagina == listarPagina){

    formularioEditar.addEventListener("submit",
        function(evento){
            evento.preventDefault();//evita la recarga de la pagina
          
            let datos = new FormData(formularioEditar);
    
            let datosEnviar =
            {
                name: datos.get('name'),
                password: datos.get('password'),                
                id: datos.get('id')
            };
    
            console.log(datosEnviar);
            fetch ( url + actualizar,
                {
                    method: 'POST',
                    body: JSON.stringify(datosEnviar)
                }
            ) 
            .then( repuesta=> repuesta.json() )
            .then ( (datosrepuestas) => {
                editarDatos(datosrepuestas)
              
            })
            .catch(console.log)
    
        })
    }



//Metodos
function cargar(){
    tablausuarios.innerHTML = "";
    cargarspinner();
    fetch ( url + listar ) //https://paginas-web-cr.com/Api/apis/ListaUsuarios.php
    .then( repuesta=> repuesta.json() )
    .then ( (datosrepuestas) => {
        //console.log(datosrepuestas)
        pintardatos(datosrepuestas)
    })
    .catch(console.log)
}

function pintardatos(objetodatos){
//    console.log(objetodatos);
    if ( objetodatos.code == 200){
        for (const item of objetodatos.data) {
            //console.log(item.id);
            tablausuarios.innerHTML += `
            <tr
            class="table-primary"
            >
                <td scope="row">${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.password}</td>
                <td>
                <a
                    name=""
                    id=""
                    class="btn btn-primary"
                    onclick=editar('${encodeURIComponent(JSON.stringify(item))}')
                    role="button"
                    >Editar</a
                >
                <a
                    name=""
                    id=""
                    class="btn btn-danger"
                    onclick=eliminar('${item.id}')
                    role="button"
                    >Eliminar</a
                >
                </td>
            </tr>`;

        }
    }



    document.getElementById("seccionspinner").innerHTML = "";
}

function cargarspinner(){
    document.getElementById("seccionspinner").innerHTML = spinner;
}

function insertarDatos(datosrepuestas){
    if ( datosrepuestas.code == 200){
        mensajes.innerHTML = `<div
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
    mensajes.innerHTML = `<div
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
    >
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
        <strong>Algo fallo</strong>
    </div>`;
    }
}

function editar(datos){
    let objeto  = JSON.parse(decodeURIComponent(datos));
    
    const modalEdicion = new bootstrap.Modal(document.getElementById("modalEdicion"));
    modalEdicion.show();


    document.getElementById("name").value = objeto.name;
    document.getElementById("email").value = objeto.email;
    document.getElementById("id").value = objeto.id;
    document.getElementById("idEditar").innerHTML = objeto.id;
    
    document.getElementById("password").value = "";

}


function editarDatos(datosrepuestas){
    if ( datosrepuestas.code == 200){
        mensajes.innerHTML = `<div
        class="alert alert-success alert-dismissible fade show"
        role="alert"
    >
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
        <strong>Modificacion exitosa</strong>
    </div>`;
    setTimeout(cargar, 3000);
    }
    else{
    mensajes.innerHTML = `<div
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
    >
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
        <strong>Algo fallo</strong>
    </div>`;
    }
}

function eliminar(id){    
    const modalEliminar = new bootstrap.Modal(document.getElementById("modalEliminar"));
    modalEliminar.show();
    document.getElementById("idEliminar").innerHTML = id;
    document.getElementById("idEliminarModal").value = id;
    
}

function modalConfirmacionEliminar(){
    alert("eliminado");
}


if (nombrePaagina == listarPagina){
    cargar();
}


