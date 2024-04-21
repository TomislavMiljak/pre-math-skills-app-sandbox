import { Outlet, NavLink } from 'react-router-dom';
import "../styles/Layout.css"
import { useContext } from "react";
import { StateContext } from '../context/StateContext';

function Layout() {
  const { isClickedCorrect, setIsClickedCorrect, isClickedCorrectTwo, setIsClickedCorrectTwo, userHasClicked, setUserHasClicked, userHasClickedTwo, setUserHasClickedTwo,handleClickCorrect, handleClickWrong, handleClickWrongTwo, handleReset } = useContext(StateContext);
 
  return (
    <div className='layout-container'>
      <h1><span style={{backgroundColor: "yellow"}}>Pre</span>
      -<span style={{backgroundColor: "skyblue"}}>Math</span>
      -<span style={{backgroundColor: "lightcoral"}}>Skills</span>
      -<span style={{backgroundColor: "lightgreen"}}>App</span></h1>
      <div className="list-container">
      <li className='home'>
        <button onClick={handleReset}><NavLink to="/">Home</NavLink></button>
            
        </li>
      <ul className='size-container'>
        
        <li>
          <button onClick={handleReset} style={{backgroundColor: "yellow"}}><NavLink to="SizeNav">Size</NavLink></button>
        </li>
        {/* <li >
            <NavLink to="size/SizeOne" >SizeOne</NavLink>
        </li>
        <li>
            <NavLink to="size/SizeTwo" >SizeTwo</NavLink>
        </li>
        <li>
            <NavLink to="size/SizeThree" >SizeThree</NavLink>
        </li> */}
        
      </ul>

      <ul className='length-container'>
        {/* <li>
            <NavLink to="length/LengthOne">LengthOne</NavLink>
        </li>
        <li>
            <NavLink to="length/LengthTwo">LengthTwo</NavLink>
        </li> */}
        <li>
          <button onClick={handleReset} style={{backgroundColor: "lightblue"}}><NavLink to="LengthNav">Length</NavLink></button> 
        </li>

      </ul>
      <ul className='height-container'>
        <li>
          <button onClick={handleReset} style={{backgroundColor: "skyblue"}}><NavLink to="HeightNav">Height</NavLink></button>
        </li>
      </ul>
      <ul className='quantity-container'>
        
        <li>
          <button onClick={handleReset} style={{backgroundColor: "lightcoral"}}><NavLink to="QuantityNav" >Quantity</NavLink></button>  
        </li>

      </ul>
      <ul className='shape-container'>
        <li>
          <button onClick={handleReset} style={{backgroundColor: "lightgreen"}}><NavLink to="ShapeNav">Shape</NavLink></button>
        </li>
      </ul>
      <ul className='position-container'>
        <li>
          <button onClick={handleReset} style={{backgroundColor: "orange"}}><NavLink to="PositionNav">Position</NavLink></button>
        </li>
      </ul>
      <ul className='difference-container'>
        <li>
          <button onClick={handleReset} style={{backgroundColor: "pink"}}><NavLink to="DifferenceNav">Difference</NavLink></button>
        </li>
      </ul>
      <ul className='details-container'>
        <li>
        <button onClick={handleReset} style={{backgroundColor: "yellowgreen"}}><NavLink to="DetailsNav">Details</NavLink></button>
          
        </li>
      </ul>
      </div>

      
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;