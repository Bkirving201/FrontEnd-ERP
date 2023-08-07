import React, { useState } from "react";
import axios from "axios";
import './App.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const API_URL = "https://backend-soccer.onrender.com/api/jugadores/irving";


const formularioInicio = {
  playerName: "",
  playerPosition: "",
  playerImgProfile: "",
  playerSize: "",
  playerWight: "",
  playerTeamActual: "",
  playerNationality: "",
};



const Formulario = () => {

  const [formulario, setFormulario] = useState(formularioInicio);


  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit = async (e) => {
    e.preventDefault();


    if (
      !formulario.playerName ||
      !formulario.playerPosition||
      !formulario.playerImgProfile||
      !formulario.playerSize||
      !formulario.playerWight||
      !formulario.playerTeamActual||
      !formulario.playerNationality
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

const handleReset = async () => {
  setFormulario({
    ...formularioInicio
  })
};
    

  return (
    <>
       <h1 className="TituloForm">Formulario para enviar jugadores a la BD</h1>
      

        <form onSubmit={handleSubmit}>


            <div className="row">

                <div class="col">

                
                  <label className="Label">
                    Nombre del jugador:
                  </label>
                  
                  <input
                    class="form-control"
                    type="text"
                    name="playerName"
                    value={formulario.playerName}
                    onChange={handleChange}
                  />

                </div>

                <br/>

                <div class="col">

                
                  <label className="Label">
                    Posición del jugador:
                  </label>

                  <input
                    class="form-control"
                    type="text"
                    name="playerPosition"
                    value={formulario.playerPosition}
                    onChange={handleChange}
                  />

                </div>

                <br/>

                <div class="col">

                
                  <label className="Label">
                    Imagen del jugador:
                  </label>

                  
                  <input
                    class="form-control"
                    type="text"
                    name="playerImgProfile"
                    value={formulario.playerImgProfile}
                    onChange={handleChange}
                  />

                </div>

                                            
            </div>
        

                  <div className="row">

                    <div class="col">


                      <label className="Label">
                        Peso del jugador:
                      </label>
                      
                      <input
                        class="form-control"
                        type="text"
                        name="playerSize"
                        value={formulario.playerSize}
                        onChange={handleChange}
                      />

                    </div>

                    <br/>

                    <div class="col">


                      <label className="Label">
                        Altura del jugador:
                      </label>

                      <input
                        class="form-control"
                        type="text"
                        name="playerWight"
                        value={formulario.playerWight}
                        onChange={handleChange}
                      />

                    </div>

                    <br/>

                    <div class="col">


                      <label className="Label">
                        Equipo actual del jugador:
                      </label>

                      
                      <input
                        class="form-control"
                        type="text"
                        name="playerTeamActual"
                        value={formulario.playerTeamActual}
                        onChange={handleChange}
                      />

                    </div>

                    <div class="col">


                      <label className="Label">
                        Nacionalidad:
                      </label>
                      
                      <input
                        class="form-control"
                        type="text"
                        name="playerNationality"
                        value={formulario.playerNationality}
                        onChange={handleChange}
                      />

            
            </div>

            <div className="col">
               <br/>
              

              <button

                  type="submit"
                  class="btn btn-primary">

                  Enviar

              </button> 
              


              <button

                type='button'
                className="btn btn-secondary"
                onClick={handleReset}>
                  
                  Limpiar
                  
              </button>



          
             </div>


          </div>
          <ToastContainer />
          
        </form>
        
    </>
  );
};

export default Formulario;
