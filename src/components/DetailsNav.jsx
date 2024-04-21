import React from 'react'

import { NavLink, Outlet} from 'react-router-dom';

function DetailsNav() {
  return (
    <>
    <nav className='detailsNav'>
        <button style={{backgroundColor: "yellowgreen"}}><NavLink to="../details/DetailsOne" >DetailsOne</NavLink></button>
        <button style={{backgroundColor: "yellowgreen"}}><NavLink to="../details/DetailsTwo">DetailsTwo</NavLink></button>
        <button style={{backgroundColor: "yellowgreen"}}><NavLink to="../details/DetailsThree">DetailsThree</NavLink></button>
        <button style={{backgroundColor: "yellowgreen"}}><NavLink to="../details/DetailsFour">DetailsFour</NavLink></button>
    </nav>
    
    <main>
      <Outlet />
    </main>
    
    </>
  )
}

export default DetailsNav;