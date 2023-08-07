import axios from 'axios';
import  './App.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react';

const Eliminar = () => {

  const [data, setData] = useState([]);
   



  useEffect(() =>{
    obtenerdatos();
  })

    const obtenerdatos = async() => {
    await axios.get('https://backend-soccer.onrender.com/api/jugadores/irving')
    .then(response => {
      setData(response.data.players);
    })
    .catch(error => {
      console.error(error);
    });
};


    const deletePost = async(id) => {

      await axios.delete(`https://backend-soccer.onrender.com/api/jugadores/irving/${id}`)
      .then(response => {
        console.log(response.data);
        obtenerdatos();

      })

      toast(
        'Eliminado Correctamente',
        { type: toast.TYPE.SUCCESS, autoClose: 2000 }
      )
      
      .catch(error => {
        console.error('Error al eliminar entidad:', error);
      });
  }
    
  console.log(data)

  
  return (

    <div className='div'>


    


      <div className="container row">

        <div className='Titulo'> Eliminar Jugadores  </div>

        <br/>



          {Array.isArray(data) && data.map(item => (


                  <div key={item._id} className="card" style={{ width: "18rem" }} >

                  <h5 className='card-title'>{item.playerName} </h5> 

                  <img
                    src={item.playerImgProfile}
                    className="card-img-top"
                    alt={item.playerName}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      
                    }}
                  />

                  <button
                  onClick={()=>deletePost(item._id)} 
                  className='btn btn-danger'
                  type="button"                 
                  
                  
                  >Eliminar</button>

                  </div>

          ))}

        <ToastContainer />

      </div>

    </div>



  );

}

export default Eliminar