import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"

function QuantityTwo(){
  const { isClickedCorrect, setIsClickedCorrect, isClickedCorrectTwo, setIsClickedCorrectTwo, userHasClicked, setUserHasClicked, userHasClickedTwo, setUserHasClickedTwo,handleClickCorrect, handleClickWrong, handleClickWrongTwo, handleReset } = useContext(StateContext);
    /* const [isClickedCorrect, setIsClickedCorrect] = useState(null);
    const [userHasClicked, setUserHasClicked] = useState(false);
    
    
    function handleClickCorrect(){
       setUserHasClicked(true)
       setIsClickedCorrect(true)
       
    }
    function handleClickWrong(){
       setUserHasClicked(true)
       setIsClickedCorrect(false)
          
    }  
  
    
    function handleReset(){
      setUserHasClicked(false)
    } 
 */
    return (
        <>
        <div className="quantityTwoContainer">
        
            <div className='headAndReset'>
              <h1>Show the set <span style={{backgroundColor: "lightcoral"}}>containing a few</span> elements</h1>
              <button onClick={handleReset}>Reset task</button>
            </div>
            <div className='quantity-container-two'>
              
            <div className="quant-two-less"  onClick={handleClickCorrect} /* onClick={() => alert("SORRY, WRONG ANSWER :)")} */ >
            {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", position: "absolute", border: "2px solid green", borderRadius: "50%"}}/>}
            <div className='quant-two-div-container'>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
            </div>
            </div>
            <div className="quant-two-more" onClick={handleClickWrongTwo} /* onClick={() => alert("CORRECT ANSWER! WELL DONE! :)")} */ >
            {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", position: "absolute", border: "2px solid red", borderRadius: "50%"}}/>}
            <div className='quant-two-div-container'>
            
            </div>
            </div>
            </div>
            
            
        </div>
        
        </>
      )


}

export default QuantityTwo;