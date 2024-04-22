//Propiedades
let tablausuarios = document.querySelector("#tablausuarios");
let url =  "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaUsuarios.php";


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
//https://paginas-web-cr.com/Api/apis/ListaUsuarios.php
//




//Metodos
function cargar(){
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
            console.log(item.id);
            tablausuarios.innerHTML += `
            <tr
            class="table-primary"
            >
                <td scope="row">${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.password}</td>
            </tr>`;


        // {"code":200,"message":"Usuarios Lista",
        // "data":[{
        //     "id":"496","name":"Briguitte Salas",
        // "email":"bri_chan93@yahoo.com",
        // "password":"e10adc3949ba59abbe56e057f20f883e"},

        }
    }



    document.getElementById("seccionspinner").innerHTML = "";
}

function cargarspinner(){
    document.getElementById("seccionspinner").innerHTML = spinner;
}

cargar();