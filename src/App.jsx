 import React from 'react'
 import Navbar from './assets/components/Navbar'
 import { Route, Routes } from "react-router-dom"
// import Formhandle from './assets/components/Formhandle'
// import Displaydata from './assets/components/displaydata'
import Register from './assets/components/Register'
import Login from './assets/components/Login'
import Dashboard from './assets/components/Dashb'

 
 
 const App = () => {
   return (
    <>
     <div>
    <Navbar />
     </div>
     <main>
        <div>
          <Routes>
            <Route path="/home" element={<Formhandle />} />
            <Route path="/Displaydata" element={<Displaydata />} />
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dash" element={<Dashboard/>} />


          </Routes>
        </div>
      </main>
 </>
   )
 }
 
 export default App
 