import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"


function ShapeThree() {
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
    <div className="shapeThreeContainer">
    
        <div className='headAndReset'>
          <h1>Show the <span style={{backgroundColor: "lightgreen"}}>rounded</span> element</h1>
          <button onClick={handleReset}>Reset task</button>
        </div>
        <div className='shape-container-three'>
          
        <div className="shape-three-straight-lined"  onClick={handleClickWrongTwo} /* onClick={() => alert("SORRY, WRONG ANSWER :)")} */ >
        {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", border: "2px solid red", borderRadius: "50%"}}/>}
        </div>
        <div className="shape-three-rounded" onClick={handleClickCorrect} /* onClick={() => alert("CORRECT ANSWER! WELL DONE! :)")} */ >
        {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", border: "2px solid green", borderRadius: "50%"}}/>}
        </div>
        </div>
        
        
    </div>
    
    </>
  )
}

export default ShapeThree;