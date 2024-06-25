import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, ModalFooter, Input, Label  } from 'reactstrap';
import CursoModal from  './CursoModal';
import axios from 'axios';

const CursoList = () => {

    const [ cursos, setCursos] = useState([]);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ cursoEditar, setCursoEditar] = useState(null);
    const [isEditar, setIsEditar] = useState(false);
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
    const [ cursoDelete, setCursoDelete ] = useState(null);
    useEffect( () => {
        fetchCursos();
    }, []);

    const fetchCursos = () => {

        fetch ( 'https://paginas-web-cr.com/Api/apis/ListaCurso.php' ) 
        .then( repuesta=> repuesta.json() )
        .then ( (datosrepuestas) => {            
            setCursos(datosrepuestas.data)
        })
        .catch(
            error => {
                console.error('Error al ejecutar', error); 
            });

    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
      };

      
    const toggleDeleteModal = (curso) => {
        setCursoDelete(curso);
        setModalDeleteOpen(!modalDeleteOpen);
      };

    const toogleEditModal = (curso) =>{
        console.log(curso);
        setCursoEditar(curso);
        if (curso){
            setIsEditar(true);
        }
        else{
            setIsEditar(false);
        }
        
        setModalOpen(true);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCursoEditar({ ...cursoEditar, [name]: value });
        console.log(cursoEditar);
    }

    const handleCursoDelete = async () => {

        try {
            const response = await axios.post('https://paginas-web-cr.com/Api/apis/BorrarCursos.php',{
                id: cursoDelete.id
            }); 
            console.log('Respuesta del API', response.data);
            
            toggleDeleteModal();
            fetchCursos();
        } catch (error) {
            console.error('Error en el api', error);
        }


        
    }


    return ( 
        <div
            className="container"
        >
            <br></br><br></br><br></br>
                <Button color="primary" onClick={()=> toogleEditModal(null)}>Agregar Cursos</Button>

            <table
                className="table table-striped table-hover table-borderless table-primary align-middle"
            >     
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Tiempo</th>
                        <th>Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider" id="tablausuarios">
                    {
                        cursos.map(
                            item =>(
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <th>{item.nombre}</th>
                                    <th>{item.descripcion}</th>
                                    <th>{item.tiempo}</th>
                                    <th>{item.usuario}</th>
                                    <th>
                                            <Button color="info" onClick={() => toogleEditModal(item)}>Editar</Button>{' '}
                                            <Button color="danger" onClick={() => toggleDeleteModal(item)}>Eliminar</Button>

                                    </th>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>



        {/* Este es el modal para crear */}
        <CursoModal 
            isOpen ={modalOpen} 
            toggleModal={toggleModal} 
            onCursoInsert={fetchCursos}
            cursoEditar={cursoEditar}
            isEditar={isEditar}

            >
            
        </CursoModal>


        <Modal isOpen={modalDeleteOpen} toggle={toggleDeleteModal}>
              <ModalHeader toggle={toggleModal}>
                    Custom Modal Styling
              </ModalHeader>
              <ModalBody>
                    <p>Desea borrar el elemento?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={handleCursoDelete} >Borrar</Button>{' '}
                <Button color="secondary" onClick={toggleDeleteModal} >Cancelar</Button>
            </ModalFooter>
            </Modal>

        </div>
        
     );
}

export default CursoList;