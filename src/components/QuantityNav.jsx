import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function QuantityNav() {
  return (
    <div>
        <nav className="quantityNav">
        <button style={{backgroundColor: "lightcoral"}}><NavLink to="../quantity/QuantityOne" >QuantityOne</NavLink></button>
        <button style={{backgroundColor: "lightcoral"}}><NavLink to="../quantity/QuantityTwo">QuantityTwo</NavLink></button>
        <button style={{backgroundColor: "lightcoral"}}><NavLink to="../quantity/QuantityThree">QuantityThree</NavLink></button>
        <button style={{backgroundColor: "lightcoral"}}><NavLink to="../quantity/QuantityFour">QuantityFour</NavLink></button>
       </nav>
    
    <main>
      <Outlet />
    </main>
    
    </div>
  )
}

export default QuantityNav