import React from 'react'
import About from './Container/About'
import Profile from './Container/Profile'
import { useState } from 'react'

function App() {
  const [state, setState] = useState('')
  let component
  if (state === 'about') {
    component = <About></About>
  }
  if (state === 'profile') {
    component = <Profile></Profile>
  }

  return (
    <div>
      <button onClick={() => setState('about')} >About</button>
      <button onClick={() => setState('profile')} >My Profile</button>
      {component}
    </div>
  )
}

export default App