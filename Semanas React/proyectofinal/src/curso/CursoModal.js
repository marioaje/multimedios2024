import React, { useEffect, useState } from 'react';

import {
    Button, Modal, ModalHeader, ModalBody, 
    ModalFooter, Form, FormGroup, Label, Input 
} from 'reactstrap';

import axios from 'axios';


const CursoModal = ( {isOpen, toggleModal, onCursoInsert, isEditar, cursoEditar}) => {
    const [ nombre, setNombre] = useState('');
    const [ descripcion, setDescripcion] = useState('');
    const [ usuario, setUsuario] = useState('');
    const [ tiempo, setTiempo] = useState('');
    const [ id, setId] = useState('');


    useEffect ( ()=>{

        if(cursoEditar){
            setDescripcion(cursoEditar.descripcion);
            setNombre(cursoEditar.nombre);
            setUsuario(cursoEditar.usuario);
            setTiempo(cursoEditar.tiempo);
            setId(cursoEditar.id);
        }else{
            setTiempo('');
            setDescripcion('');
            setUsuario('');
            setNombre('');
            setId('');
        }


    }, [cursoEditar]);


    const cleanData = () =>{
        setTiempo('');
        setDescripcion('');
        setUsuario('');
        setNombre('');
        setId('');
    }


    const handleSubmit = async () => {   

        try {
            const response = await axios.post('https://paginas-web-cr.com/Api/apis/InsertarCursos.php', 
                {
                    nombre,
                    descripcion,
                    tiempo,
                    usuario
                }
            );
            console.log('Respuesta', response.data);
            onCursoInsert();
            cleanData();
            toggleModal();
        } catch (error) {
            console.error('Error en el API', error);
        }
    }


    return ( 

        <Modal isOpen={isOpen} toggle={toggleModal} >
        <ModalHeader toogle={toggleModal} > 
            {
                isEditar ? 'Editar ' : 'Insertar '
            }            
             Curso</ModalHeader>
        <ModalBody>
        <Label>Nombre</Label>
            <Input type="text" id="nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}></Input>
            <Label>Descripcion</Label>
            <Input type="text" id="descripcion" value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}></Input>
            <Label>Tiempo</Label>
            <Input type="text" id="tiempo" value={tiempo} onChange={(e)=> setTiempo(e.target.value)}></Input>
            <Label>Usuario</Label>
            <Input type="text" id="usuario" value={usuario} onChange={(e)=> setUsuario(e.target.value)}></Input>                                                                                                                                                                       

        </ModalBody>
        <ModalFooter>
        <Button color='success' onClick={handleSubmit}>
            Guardar
        </Button>
        <Button color='danger' onClick={toggleModal}>
            Cerrar
        </Button>


        </ModalFooter>
    </Modal>
        


     );
}

export default CursoModal;