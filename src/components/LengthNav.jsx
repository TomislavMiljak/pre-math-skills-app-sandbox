import React from 'react'

import { NavLink, Outlet} from 'react-router-dom';

function LengthNav() {
  return (
    <>
    <nav className='lengthNav'>
        <button style={{backgroundColor: "lightblue"}}><NavLink to="../length/LengthOne">LengthOne</NavLink></button>
        <button style={{backgroundColor: "lightblue"}}><NavLink to="../length/LengthTwo">LengthTwo</NavLink></button>
        <button style={{backgroundColor: "lightblue"}}><NavLink to="../length/LengthThree">LengthThree</NavLink></button>
        <button style={{backgroundColor: "lightblue"}}><NavLink to="../length/LengthFour">LengthFour</NavLink></button>
    </nav>
    
    <main>
      <Outlet />
    </main>
    
    </>
  )
}

export default LengthNav