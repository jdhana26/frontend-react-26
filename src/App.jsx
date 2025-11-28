import React from 'react'
import Navbar from './assets/components/Navbar'
import { Route, Routes } from "react-router-dom"
import Register from './assets/components/Register'
import Login from './assets/components/Login'
import Dashboard from './assets/components/Dashb'

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* Registration */}
          <Route path="/" element={<Register />} />
          
          {/* Login */}
          <Route path="/login" element={<Login />} />
          
          {/* Dashboard */}
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  )
}

export default App
