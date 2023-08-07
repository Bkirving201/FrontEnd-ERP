import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/pages/Inicio.jsx'
import Productos from './components/pages/Productos.jsx'
import Sidebar from './components/MenuBar.jsx'

function App() {


  return (



    <BrowserRouter>

    <Sidebar>

      <Routes>
        
          <Route path='/'element={ <Inicio/> }/>
          <Route path='/productos'element={ <Productos/> }/>

      </Routes>

      </Sidebar>
    
    
    </BrowserRouter>



  )
}

export default App