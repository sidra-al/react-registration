import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profil from './Pages/Profil'
import About from './Pages/About'
import Nav from './Combonents/Nav'
import Register from './Pages/Register'
function App() {
  return (
    <>
   <Nav/>
    <Routes>
      <Route path="/home" element ={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path='/profil' element={<Profil/>}/>
       <Route path='/register' element={<Register/>}/>
    </Routes></>
    
  )
}

export default App
