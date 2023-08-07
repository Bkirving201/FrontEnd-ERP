import React, { useState, useEffect } from "react";
import '../Styles/Index.css'


import {
        FaBookReader
      
      } from "react-icons/fa";


const Cards = () => {

  const menudashboard = [

       {

        name:"Clientes",
        iconos: <FaBookReader/>,
        cantidad: "5"
        
       },

       {

        name:"Clientes",
        iconos: <FaBookReader/>,
        cantidad: "5"
        
       },
       {

        name:"Clientes",
        iconos: <FaBookReader/>,
        cantidad: "5"
        
       }
  ]


  return (


        <div className="row row-cols-1 row-cols-md-4 g-4">

          {

              menudashboard.map((item,index)=>(

                  <div className="col">
                    <div className="card">
                      <div className="container">

                          <div className="divicon">

                            <div className='iconos'> {item.iconos} </div>

                          </div>

                          <div className="TextInfo">
                                
                              <p className="Titulo"> {item.name} </p>
                              <p className="Cantidad"> {item.cantidad} </p>

                          </div>
                        </div>
                      
                    </div>
                  </div>
              
              ))

          }

          

      </div>

   
  )

}


export default Cards