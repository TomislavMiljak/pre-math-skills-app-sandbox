import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"


function PositionFour() {
  const { isClickedCorrect, setIsClickedCorrect, isClickedCorrectTwo, setIsClickedCorrectTwo, userHasClicked, setUserHasClicked, userHasClickedTwo, setUserHasClickedTwo,handleClickCorrect, handleClickWrong, handleClickWrongTwo, handleReset } = useContext(StateContext);
  //const [isClickedCorrect, setIsClickedCorrect] = useState(null);
  //const [userHasClicked, setUserHasClicked] = useState(false);
  
  
 /*  function handleClickCorrect(){
     setUserHasClicked(true)
     setIsClickedCorrect(true)
     
  }
  function handleClickWrong(){
     setUserHasClicked(true)
     setIsClickedCorrect(false)
        
  }  

  
  function handleReset(){
    setUserHasClicked(false)
  } */
  
  return (
    <>
    <div className="positionFourContainer">
    
        <div className='headAndReset'>
          <h1>Show the element on the <span style={{backgroundColor: "orange"}}>left</span> side</h1>
          <button onClick={handleReset}>Reset task</button>
        </div>
        <div className='position-container-four'>
          
        <div className="left-four" onClick={handleClickCorrect} /* onClick={() => alert("SORRY, WRONG ANSWER :)")} */ >
        {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", border: "2px solid green", borderRadius: "50%"}}/>}
        </div>
        <div className="right-four" onClick={handleClickWrongTwo} /* onClick={() => alert("CORRECT ANSWER! WELL DONE! :)")} */ >
        {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        </div>
        
        
    </div>
    
    </>
  )
}

export default PositionFour;