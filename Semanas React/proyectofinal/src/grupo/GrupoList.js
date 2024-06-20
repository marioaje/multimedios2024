import React, { useEffect, useState } from 'react';

const GrupoList = () => {

    //declaracion de variables, arreglos
    const [cursos, setCursos] = useState([]);

    //Ejecuta funciones, renderiza la pantalla, ejecuta scripts
    useEffect(() =>{
        fetchCursos();
    }, []);

    //Declarar funciones.
    const fetchCursos = () =>{
        //url + listar esto es la url del servicio concatenada
        fetch( 'https://paginas-web-cr.com/Api/apis/ListaCurso.php' )
        .then(respuesta=>respuesta.json())
        .then( (datosrepuesta) => {
            setCursos(datosrepuesta.data);
        })
        .catch(
            error=>{
                console.error('Error al cargar:' , error);
            }
        );
    };


    
//https://paginas-web-cr.com/Api/apis/ListaCurso.php
    return ( 

        <div className='container'>
                <table
                                className="table table-info"
                            >
                               
                                <thead>
                                    <tr>
                                        <th scope="col">Acciones</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripcion</th>
                                        <th scope="col">Tiempo</th>
                                        <th scope="col">Usuario</th>
                                        
                                    </tr>
                                </thead>
                                <tbody id="datos">
                                    {
                                        cursos.map( curso => (
                                                <tr key={curso.id}>
                                                    <td>Botones</td>
                                                    <td>{curso.id}</td>
                                                    <td>{curso.nombre}</td>
                                                    <td>{curso.descripcion}</td>
                                                    <td>{curso.tiempo}</td>
                                                    <td>{curso.usuario}</td>
                                                </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
        </div>


      );
}

export default GrupoList;
