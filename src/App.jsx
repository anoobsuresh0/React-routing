import React from 'react'
import About from './Container/About'
import Profile from './Container/Profile'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

function App() {
  const [state, setState] = useState('')

  return (
    <div className="App">
      <h1>Hello</h1> 
      <Link to="about">About Page</Link>
      <Link to="profile"> Profile Page</Link>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
       
      </Routes>
    </div>

  )
}

export default App