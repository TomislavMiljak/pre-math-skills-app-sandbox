import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"


function DetailsThree() {
  const { isClickedCorrect, setIsClickedCorrect, isClickedCorrectThree, setIsClickedCorrectThree, userHasClicked, setUserHasClicked, userHasClickedThree, setUserHasClickedThree, handleClickCorrect, handleClickWrong, handleClickWrongThree, handleReset } = useContext(StateContext);
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
    <div className="detailsThreeContainer">
    
        <div className='headAndReset'>
          <h1>Show the box containing <span style={{backgroundColor: "yellowgreen"}}>identical</span> elements</h1>
          <button onClick={handleReset}>Reset task</button>
        </div>
        <div className='details-container-three'>
          
        <div className="containing-odd-three"  onClick={handleClickWrongThree} /* onClick={() => alert("SORRY, WRONG ANSWER :)")} */ >
        {!isClickedCorrectThree && userHasClickedThree && <img src={sad} style={{width: "30px", height: "30px", position: "absolute", border: "2px solid red", borderRadius: "50%"}}/>}
        <div className='div-container-three'>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        <div>I</div>
        <div>O</div>
        <div>O</div>
        
        </div>
        
        </div>
        <div className="containing-identical-three" onClick={handleClickCorrect} /* onClick={() => alert("CORRECT ANSWER! WELL DONE! :)")} */ >
        {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", position: "absolute", border: "2px solid green", borderRadius: "50%"}}/>}
        <div className='div-container-three'>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        <div>O</div>
        
        </div>
        </div>
        </div>
        
        
    </div>
    
    </>
  )
}

export default DetailsThree;