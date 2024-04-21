import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"

function HeightFour() {
  const { isClickedCorrect, setIsClickedCorrect, isClickedCorrectOne, setIsClickedCorrectOne, isClickedCorrectTwo, setIsClickedCorrectTwo,userHasClicked, setUserHasClicked, userHasClickedOne, setUserHasClickedOne,userHasClickedTwo, setUserHasClickedTwo, handleClickCorrect, handleClickWrong, handleClickWrongOne, handleClickWrongTwo, handleReset } = useContext(StateContext);
  return (
    <>
     <div className="heightFourContainer">
        <div className='headAndReset'>
        <h1>Show the <span style={{backgroundColor: "skyblue"}}>longest</span> box</h1>
        <button onClick={handleReset}>Reset task</button>
        </div>
        
        <div className='height-container-four'>
        <div className="height-shortest-four" onClick={handleClickWrongOne}>
        {!isClickedCorrectOne && userHasClickedOne && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        <div className='height-middle-four' onClick={handleClickWrongTwo}>
        {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        <div className="height-longest-four" onClick={handleClickCorrect}>
        {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", border: "2px solid green", borderRadius: "50%"}}/>}
        </div>
        </div>
        
    </div>
    
    </>
  )
}

export default HeightFour;