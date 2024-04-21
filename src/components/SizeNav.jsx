import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function SizeNav() {
  return (
    <div>
        <nav className="sizeNav" >
        <button style={{backgroundColor: "yellow"}}><NavLink to="../size/SizeIntro" >SizeIntro</NavLink></button>
        <button style={{backgroundColor: "yellow"}}><NavLink to="../size/SizeOne">SizeOne</NavLink></button>
        <button style={{backgroundColor: "yellow"}}><NavLink to="../size/SizeTwo">SizeTwo</NavLink></button>
        <button style={{backgroundColor: "yellow"}}><NavLink to="../size/SizeThree">SizeThree</NavLink></button>
       </nav>
    
    <main>
      <Outlet />
    </main>
    
    </div>
  )
}

export default SizeNav;