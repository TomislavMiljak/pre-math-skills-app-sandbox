import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"


function DifferenceOne() {
  const { isClickedCorrect, setIsClickedCorrect, isClickedCorrectOne, setIsClickedCorrectOne, isClickedCorrectTwo, setIsClickedCorrectTwo,isClickedCorrectThree, setIsClickedCorrectThree, userHasClicked, setUserHasClicked, userHasClickedOne, setUserHasClickedOne,handleClickCorrect, handleClickWrong, handleReset, userHasClickedTwo, setUserHasClickedTwo, handleClickWrongOne, handleClickWrongTwo, userHasClickedThree, setUserHasClickedThree, handleClickWrongThree } = useContext(StateContext);
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
    <div className="differenceOneContainer">
    
        <div className='headAndReset'>
          <h1>Show the <span style={{backgroundColor: "pink"}}>differing</span> element</h1>
          <button onClick={handleReset}>Reset task</button>
        </div>
        <div className='difference-container-one'>
          
        <div className="diff-one-straight-lined"  onClick={handleClickWrongOne} /* onClick={() => alert("SORRY, WRONG ANSWER :)")} */ >
        {!isClickedCorrectOne && userHasClickedOne && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        <div className="diff-one-rounded"  onClick={handleClickCorrect} /* onClick={() => alert("SORRY, WRONG ANSWER :)")} */ >
        {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", border: "2px solid green", borderRadius: "50%"}}/>}
        </div>
        <div className="diff-one-straight-lined" onClick={handleClickWrongTwo} /* onClick={() => alert("CORRECT ANSWER! WELL DONE! :)")} */ >
        {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        <div className="diff-one-straight-lined"  onClick={handleClickWrongThree} /* onClick={() => alert("SORRY, WRONG ANSWER :)")} */ >
        {!isClickedCorrectThree && userHasClickedThree && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        </div>
        
        
    </div>
    
    </>
  )
}

export default DifferenceOne;