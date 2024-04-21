import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"


function DetailsTwo() {
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
    <div className="detailsTwoContainer">
    
        <div className='headAndReset'>
          <h1>Show the box containing an <span style={{backgroundColor: "yellowgreen"}}>odd</span> element</h1>
          <button onClick={handleReset}>Reset task</button>
        </div>
        <div className='details-container-two'>
          
        <div className="containing-identical-two"  onClick={handleClickWrongTwo} /* onClick={() => alert("SORRY, WRONG ANSWER :)")} */ >
        {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", position: "absolute", border: "2px solid red", borderRadius: "50%"}}/>}
        <div className='div-container-two'>
        <div>X</div>
        <div>X</div>
        <div>X</div>
        <div>X</div>
        <div>X</div>
        <div>X</div>
        
        
        </div>
        </div>
        <div className="containing-odd-two" onClick={handleClickCorrect} /* onClick={() => alert("CORRECT ANSWER! WELL DONE! :)")} */ >
        {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", position: "absolute", border: "2px solid green", borderRadius: "50%"}}/>}
        <div className='div-container-two'>
        <div>X</div>
        <div>X</div>
        <div>X</div>
        <div>O</div>
        <div>X</div>
        <div>X</div>
        
        
        </div>
        </div>
        </div>
        
        
    </div>
    
    </>
  )
}

export default DetailsTwo;