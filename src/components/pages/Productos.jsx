import React, { useState,useEffect } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'
import '../Styles/Productos.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const API_URL = "https://backenderp.onrender.com/productos";


const Productos = () => {


  //Definiciión de los datos del formulario

      const formularioInicio = {

        CodigoProducto: " ",
        ProductoName: " ",
        CantidadStock: " ",
        Precio: " ",
        Descripción: " ",
    
    };


  const [formulario,setFormulario] = useState(formularioInicio);


  //Constante para enviar datos al formulario

  const handle= (e) => {
    setFormulario({
      ...formulario,
      [e.target.id]: e.target.value,
    });
  };

  //Cosntante para enviar datos al formulario

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (

      !formulario.CodigoProducto ||
      !formulario.ProductoName||
      !formulario.CantidadStock||
      !formulario.Precio||
      !formulario.Descripción

      ){

      toast.error('Por favor, rellene todos los campos del formulario.');
      
    } else {


    try {
      await axios
        .post(API_URL, formulario)
        .then((response) => {
          console.log(response);
        })

        toast(
          'Datos guardados correctamente',
          { type: toast.TYPE.SUCCESS, autoClose: 2000 }
        );
        

    } catch (error) {
      toast(error.message, { type: toast.TYPE.ERROR, autoClose: 3000 })
    }
  }
};

//Obtención de productos desde el API 
const getProductos = async () => {

  try {
    
    const response = await fetch(API_URL);
    const data = await response.json();
    setProducto(data)
    console.log(data);

  } catch (error) {
    console.log(error)
  }

};

useEffect(() => {
  getProductos();
}, []);


  //Definición de un modal para abrir datos de editar 

    const [show, setShow] = useState(false);

    const [selectedItemId, setSelectedItemId] = useState(null);

    const [producto,setProducto] = useState([]);


        //Constantes para mostrar el modal de los datos 

    const handleClose = () => {
      setSelectedItemId(null);
      setShow(false);
    }

    const handleShow = (itemId) => {
      setShow(true);
      selectedItemId(itemId);
      
            
    }
  

    const handleSaveChanges = () => {
      // Realiza las operaciones necesarias para enviar los datos modificados a la API
      console.log('Guardando cambios para el elemento con ID:', selectedItemId);
      handleClose();
    };

  
    //Definiciion de los datos de la tabla 


  return (

    <>

    <div className="contenedor">


        <p> aun tengo datos  </p>

        <form onSubmit={handleSubmit}>


          
          <div className="form-row">
            
            <div class="form-group col-md-6">

                <div className="col">
                  
                    <input 
                    onChange={(e)=>handle(e)}
                    id="CodigoProducto" 
                    value={formulario.CodigoProducto}
                    className="form-control" 
                    type="text"/>
              
                </div>

                <div className="col">

                    <input 
                    onChange={(e)=>handle(e)}
                    id="ProductoName"
                    value={formulario.ProductoName}
                    type="text" 
                    className="form-control" 
                    />

                </div>

                <div className="col">

                    <input 
                    onChange={(e)=>handle(e)}
                    id="CantidadStock"
                    value={formulario.CantidadStock}
                    type="text" 
                    className="form-control" 
                    />

                </div>

                <div className="col">

                    <input 
                    onChange={(e)=>handle(e)}
                    id="Precio"
                    value={formulario.Precio}
                    type="text" 
                    className="form-control" 
                    />
                </div>


                <div className="col">

                    <input 
                    onChange={(e)=>handle(e)}
                    id="Descripción"
                    value={formulario.Descripción}
                    type="text" 
                    className="form-control" 
                    />

                </div>

                <div>
                      <button

                        type="submit"
                        class="btn btn-primary">
                        

                        Enviar

                      </button> 

                </div>
          

          </div>
          <ToastContainer />
        </div>
        


        </form>

               
              
        
    </div>



    {/* DATOS DE MODAL PARA EDITAR DATOS  */}

  
          
      {/* AQUI ACABA EL MODAL */}

    
    <div className="container">


          
        <table className="table table-striped">
        

        <thead>

            <tr className="Titulos">
              <th scope="col">Codigo del producto</th>
              <th scope="col">Producto</th>
              <th scope="col">Stock</th>
              <th scope="col">Precio</th>
              <th scope="col">Descripción</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>


          <tbody>

          {producto.map((cli) => (

          
            <tr className="Datos" key={cli._id}>
              <td>{cli.CodigoProducto}</td>
              <td>{cli.ProductoName}</td>
              <td>{cli.CantidadStock}</td>
              <td>{cli.Precio}</td>
              <td>{cli.Descripción}</td>   
              <td>
              <button 
               type="submit"
               class="btn btn-primary"
               onClick={()=>handleShow(cli._id)}
               >
               Editar
               </button>  
              </td>         
            </tr>
             
          ))}

           
          </tbody>


        </table>











        
      </div>

          <Modal

              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}

              >

           <Modal.Header closeButton>

            <Modal.Title> Actualizar Datos </Modal.Title>

            </Modal.Header>

            <Modal.Body>

            <p>Editando el elemento con ID: {selectedItemId}</p>


            </Modal.Body>
            <Modal.Footer>


                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>

                <Button variant="primary" onClick={handleSaveChanges}> Aceptar </Button>


              </Modal.Footer>
              </Modal>





    </>
  )
}

export default Productos
