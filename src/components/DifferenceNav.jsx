import React from 'react'

import { NavLink, Outlet} from 'react-router-dom';

function DifferenceNav() {
  return (
    <>
    <nav className='differenceNav'>
        <button style={{backgroundColor: "pink"}}><NavLink to="../difference/DifferenceOne">DifferenceOne</NavLink></button>
        <button style={{backgroundColor: "pink"}}><NavLink to="../difference/DifferenceTwo">DifferenceTwo</NavLink></button>
        <button style={{backgroundColor: "pink"}}><NavLink to="../difference/DifferenceThree">DifferenceThree</NavLink></button>
        <button style={{backgroundColor: "pink"}}><NavLink to="../difference/DifferenceFour">DifferenceFour</NavLink></button>
    </nav>
    
    <main>
      <Outlet />
    </main>
    
    </>
  )
}

export default DifferenceNav;