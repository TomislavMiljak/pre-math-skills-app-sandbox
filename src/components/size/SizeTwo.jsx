import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"

function SizeTwo() {
  const { isClickedCorrect, setIsClickedCorrect, isClickedCorrectOne, setIsClickedCorrectOne, isClickedCorrectTwo, setIsClickedCorrectTwo,userHasClicked, setUserHasClicked, userHasClickedOne, setUserHasClickedOne,userHasClickedTwo, setUserHasClickedTwo, handleClickCorrect, handleClickWrong, handleClickWrongOne, handleClickWrongTwo, handleReset } = useContext(StateContext);
  return (
    <>
     <div className="sizeTwoContainer">
        
        <div className='headAndReset'>
        <h1>Show the <span style={{backgroundColor: "yellow"}}>biggest</span> box</h1>
        <button onClick={handleReset}>Reset task</button>
        </div>
        
        <div className='size-container-two'>
        <div className="size-smallest-two" onClick={handleClickWrongOne}>
        {!isClickedCorrectOne && userHasClickedOne && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        <div className='size-middle-two' onClick={handleClickWrongTwo}>
        {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        <div className="size-biggest-two" onClick={handleClickCorrect}>
        {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", border: "2px solid green", borderRadius: "50%"}}/>}
        </div>
        </div>
        
    </div>
    
    </>
  )
}

export default SizeTwo