
// apis/InsertarCursos.php

//     { "nombre":"React 22", "descripcion":"React Junior", "tiempo":"10 Meses", "usuario":"profesor Mario" }

import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, ModalFooter, Input, Label  } from 'reactstrap';
import axios from 'axios';


const CursoModal = ({isOpen, toggleModal, onCursoInsert, cursoEditar, isEditar}) => {
    //{ "nombre":"React 22", "descripcion":"React Junior", "tiempo":"10 Meses", "usuario":"profesor Mario" }
    const [ nombre, setNombre ] = useState('') ;
    const [ descripcion, setDescripcion ] = useState('') ;
    const [ tiempo, setTiempo ] = useState('') ;
    const [ usuario, setUsuario ] = useState('') ;
    const [ id, setId ] = useState('') ;
    

    useEffect( () => {
        if (cursoEditar){
            setDescripcion(cursoEditar.descripcion) ;
            setNombre(cursoEditar.nombre) ;
            setTiempo(cursoEditar.tiempo) ;
            setUsuario(cursoEditar.usuario) ;
            
        }
        else{
            setNombre ('');
            setDescripcion ('');
            setTiempo ('');
            setUsuario ('');
            
        }
    }, [cursoEditar]);

    //const [ modalOpen, setModalOpen ] = useState(false);
    
    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://paginas-web-cr.com/Api/apis/InsertarCursos.php',{
                nombre,
                descripcion,
                tiempo,
                usuario
            }); 
            console.log('Respuesta del API', response.data);
            cleanData();
            toggleModal();
            onCursoInsert();
        } catch (error) {
            console.error('Error en el api', error);
        }

    }

    const cleanData = () =>{
        setNombre ('');
        setDescripcion ('');
        setTiempo ('');
        setUsuario ('');
    }



    return ( 

    
        <Modal isOpen={isOpen} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}>
                    {isEditar ? 'Editar' : 'Insertar'} Curso
              </ModalHeader>
              <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="nombre">Nombre</Label>
                        <Input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} ></Input>
                        <Label for="descripcion">Descripcion</Label>
                        <Input type="text" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} ></Input>
                        <Label for="nombre">Tiempo</Label>
                        <Input type="text" id="tiempo" value={tiempo} onChange={(e) => setTiempo(e.target.value)} ></Input>
                        <Label for="nombre">Usuario</Label>
                        <Input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} ></Input>                                                                        
                    </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={handleSubmit} >
                        {isEditar ? 'Editar' : 'Insertar'}
                    </Button>{' '}
                <Button color="secondary" onClick={toggleModal} >Cancelar</Button>
            </ModalFooter>
            </Modal>
                
        

     );
}

export default CursoModal;