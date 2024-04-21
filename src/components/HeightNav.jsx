import React from 'react'

import { NavLink, Outlet} from 'react-router-dom';

function HeightNav() {
  return (
    <>
    <nav className='heightNav'>
        <button style={{backgroundColor: "skyblue"}}><NavLink to="../height/HeightOne">HeightOne</NavLink></button>
        <button style={{backgroundColor: "skyblue"}}><NavLink to="../height/HeightTwo">HeightTwo</NavLink></button>
        <button style={{backgroundColor: "skyblue"}}><NavLink to="../height/HeightThree">HeightThree</NavLink></button>
        <button style={{backgroundColor: "skyblue"}}><NavLink to="../height/HeightFour">HeightFour</NavLink></button>
    </nav>
    
    <main>
      <Outlet />
    </main>
    
    </>
  )
}

export default HeightNav