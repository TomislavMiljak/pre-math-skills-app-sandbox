import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"

function LengthOne() {
  const { isClickedCorrect, setIsClickedCorrect, isClickedCorrectTwo, setIsClickedCorrectTwo, userHasClicked, setUserHasClicked, userHasClickedTwo, setUserHasClickedTwo, handleClickCorrect, handleClickWrong, handleClickWrongTwo, handleReset } = useContext(StateContext);

  return (
    <div>
      <div className="lengthOneContainer">
      <div className='headAndReset'>
          <h1>Show the <span style={{backgroundColor: "lightblue"}}>longer</span> box</h1>
          <button onClick={handleReset}>Reset task</button>
        </div>
        <div className='length-container-one'>
        <div className="shorter" onClick={handleClickWrongTwo}>
        {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}  
        </div>
        <div className="longer" onClick={handleClickCorrect}>
        {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", border: "2px solid green", borderRadius: "50%"}}/>}  
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default LengthOne