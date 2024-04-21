import React from 'react'

import { NavLink, Outlet} from 'react-router-dom';

function ShapeNav() {
  return (
    <>
    <nav className='shapeNav'>
        <button style={{backgroundColor: "lightgreen"}}><NavLink to="../shape/ShapeOne">ShapeOne</NavLink></button>
        <button style={{backgroundColor: "lightgreen"}}><NavLink to="../shape/ShapeTwo">ShapeTwo</NavLink></button>
        <button style={{backgroundColor: "lightgreen"}}><NavLink to="../shape/ShapeThree">ShapeThree</NavLink></button>
        <button style={{backgroundColor: "lightgreen"}}><NavLink to="../shape/ShapeFour">ShapeFour</NavLink></button>
    </nav>
    
    <main>
      <Outlet />
    </main>
    
    </>
  )
}

export default ShapeNav;