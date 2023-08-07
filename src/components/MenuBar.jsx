import React, { useState } from 'react'
import {FaTh,FaBookmark,FaBars} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Styles/Sidebard.css'



const Sidebar =( {children} )=> {

    const [IsOpen ,SetIsOpen] = useState(false);
    const toggle =()=>SetIsOpen (!IsOpen);

    
    const menuitem=[
      {
        path:"/",
        name:"Dashboard",
        icon: <FaTh/>

      },
      {
        path:"/productos",
        name:"Productos",
        icon: <FaBookmark/>
        
      },

      {
        path:"/formulario",
        name:"formulario",
        icon: <FaBookmark/>
        
      },
    
    ]

    
  return (


    <div className="Container">

      <div style={ {width: IsOpen ? "200px" : "50px" }} className="sidebar">

        <div className="top_section">

          <h1 style={ {display: IsOpen? "block" : "none"} } className="logo"> Nexxus </h1>
          <div  style={  {marginLeft:IsOpen? "50px" : "0px" } } className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {

            menuitem.map((item,index)=>(
              <NavLink to={item.path} key={index} className="link" activeClassName ="active">
                <div className='icon'> {item.icon} </div>
                <div style={ {display: IsOpen? "block" : "none"} } className="link_text"> { item.name} </div>

              </NavLink>
            ))

        }

      </div>

      <main>

          {children}

      </main>

    </div>

  )

}

export default Sidebar