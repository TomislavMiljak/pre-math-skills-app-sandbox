import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"

function LengthThree() {
  const { isClickedCorrect, setIsClickedCorrect, isClickedCorrectOne, setIsClickedCorrectOne, isClickedCorrectTwo, setIsClickedCorrectTwo, userHasClicked, setUserHasClicked, userHasClickedOne, setUserHasClickedOne,userHasClickedTwo, setUserHasClickedTwo, handleClickCorrect, handleClickWrong, handleClickWrongOne, handleClickWrongTwo,handleReset } = useContext(StateContext);
  return (
    <>
     <div className="lengthThreeContainer">
        <div className="headAndReset">
        <h1>Show the <span style={{backgroundColor: "lightblue"}}>shortest</span> box</h1>
        <button onClick={handleReset}>Reset task</button>
        </div>
        
        <div className='length-container-three'>
        <div className="shortest-three" onClick={handleClickCorrect}>
        {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", border: "2px solid green", borderRadius: "50%"}}/>}
        </div>
        <div className='middle-three' onClick={handleClickWrongOne}>
        {!isClickedCorrectOne && userHasClickedOne && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        <div className="longest-three" onClick={handleClickWrongTwo}>
        {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        </div>
        
    </div>
    
    </>
  )
}

export default LengthThree;