import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"


function SizeThree() {
  const { isClickedCorrect, setIsClickedCorrect, isClickedCorrectOne, setIsClickedCorrectOne, isClickedCorrectTwo, setIsClickedCorrectTwo, userHasClicked, setUserHasClicked, userHasClickedOne, setUserHasClickedOne, handleClickCorrect, handleClickWrong, handleClickWrongOne, handleReset, userHasClickedTwo, setUserHasClickedTwo, handleClickWrongTwo } = useContext(StateContext);

  return (
    <>
    <div className="sizeThreeContainer">
      <div className='headAndReset'>
        <h1>Show the <span style={{backgroundColor: "yellow"}}>smallest</span> box</h1>
        <button onClick={handleReset}>Reset task</button>
      </div>
        

        <div className='size-container-three'>
        <div className="size-smallest-three" onClick={handleClickCorrect}>
        {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", border: "2px solid green", borderRadius: "50%"}}/>} 
        </div>
        <div className='size-middle-three'onClick={handleClickWrongOne}>
        {!isClickedCorrectOne && userHasClickedOne && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        <div className="size-biggest-three" onClick={handleClickWrongTwo}>
        {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>} 
        </div>
        </div>
        
    </div>
    
    </>
  )
}

export default SizeThree