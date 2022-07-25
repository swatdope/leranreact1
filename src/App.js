import React, {useState} from 'react'
import Body from './components/Body/Body.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

const App = () => {
  return (
    <div>
      <Navbar heading1={"Tenzu Boking"} heading2={"Book Now mother fucker"} number={2} />
      <Body />
    </div>
  )
}

export default App
