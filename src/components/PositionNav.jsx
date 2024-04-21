import React from 'react'

import { NavLink, Outlet} from 'react-router-dom';

function PositionNav() {
  return (
    <>
    <nav className='positionNav'>
        <button style={{backgroundColor: "orange"}}><NavLink to="../position/PositionOne">PositionOne</NavLink></button>
        <button style={{backgroundColor: "orange"}}><NavLink to="../position/PositionTwo">PositionTwo</NavLink></button>
        <button style={{backgroundColor: "orange"}}><NavLink to="../position/PositionThree">PositionThree</NavLink></button>
        <button style={{backgroundColor: "orange"}}><NavLink to="../position/PositionFour">PositionFour</NavLink></button>
    </nav>
    
    <main>
      <Outlet />
    </main>
    
    </>
  )
}

export default PositionNav;