import React, { useEffect, useState } from 'react';
import {
        Button, Modal, ModalHeader, ModalBody, 
        ModalFooter, Form, FormGroup, Label, Input 
    } from 'reactstrap';

import CursoModal from './CursoModal';

const CursoList = () => {

    //declaracion de variables, arreglos
    const [cursos, setCursos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [ cursoEditar, setCursoEditar] = useState(null);
    const [ isEditar, setIsEditar] = useState(false);

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


    const toggleEditModal = (curso) =>{
        setCursoEditar(curso);

        if(curso){
            setIsEditar(true);
        }else{
            setIsEditar(false);
        }

        setModalOpen(true);
    };



    const guardar = async ()=>{
        // similar al fect
    }

    //Permite abri modal desde otro componente.
    const toggleModal =() =>{

        setModalOpen(!modalOpen);
    }

    
//https://paginas-web-cr.com/Api/apis/ListaCurso.php
    return ( 

        <div className='container'>

<br></br><br></br><br></br>


            <Button color='primary' onClick={() => toggleEditModal(null)}>
                Agregar Curso
            </Button>

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
                                        <th scope="col">Acciones</th>
                                        
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
                                                    <td>
                                                        <Button color='primary' onClick={()=>toggleEditModal(curso)}>Editar</Button>

                                                    </td>
                                                </tr>
                                        ))
                                    }


                                </tbody>
                            </table>

                        {/* <Modal isOpen={modalOpen} >
                            <ModalHeader >Modal Curso</ModalHeader>
                            <ModalBody>
                                <Label>Nombre</Label>
                                <Input type="text" id="nombre" value={cursoEditar?.nombre || ''}></Input>
                                <Label>Descripcion</Label>
                                <Input type="text" id="descripcion" value={cursoEditar?.descripcion || ''}></Input>
                                <Label>Tiempo</Label>
                                <Input type="text" id="tiempo" value={cursoEditar?.tiempo || ''}></Input>
                                <Label>Usuario</Label>
                                <Input type="text" id="usuario" value={cursoEditar?.usuario || ''}></Input>                                                                                                                                                             
                            </ModalBody>
                            <ModalFooter>
                            <Button color='success' onClick={guardar}>
                                Guardar
                            </Button>
                            <Button color='danger' onClick={() => toggleEditModal(false)}>
                                Cerrar
                            </Button>


                            </ModalFooter>
                        </Modal> */}



        <CursoModal 
            isOpen={modalOpen} 
            toggleModal={toggleModal} 
            onCursoInsert={fetchCursos}
            isEditar={isEditar}
            cursoEditar={cursoEditar}
            >
        </CursoModal>

        </div>



      );
}

export default CursoList;
