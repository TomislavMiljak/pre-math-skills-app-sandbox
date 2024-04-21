import React from 'react'
import { useContext } from "react";
import { StateContext } from '../../context/StateContext';
import smile from "../../assets/smile.jpg"
import sad from "../../assets/sad.jpg"

function QuantityOne(){
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
    }  */

    return (
        <>
        <div className="quantityOneContainer">
        
            <div className='headAndReset'>
              <h1>Show the <span style={{backgroundColor: "lightcoral"}}>empty</span> set</h1>
              <button onClick={handleReset}>Reset task</button>
            </div>

            <div className='quantity-container-one'>

            <div className="quant-one-less"  onClick={handleClickWrongTwo} /* onClick={() => alert("SORRY, WRONG ANSWER :)")} */ >
            {!isClickedCorrectTwo && userHasClickedTwo && <img src={sad} style={{width: "30px", height: "30px", position: "absolute", border: "2px solid red", borderRadius: "50%"}}/>}
            <div className='quant-one-div-container'>
              <div id="div"></div>
              <div id="div"></div>
              <div id="div"></div>
            </div>
            
            </div>
            
             
           <div className="quant-one-more" onClick={handleClickCorrect} /* onClick={() => alert("CORRECT ANSWER! WELL DONE! :)")} */ >
            {isClickedCorrect && userHasClicked && <img src={smile} style={{width: "30px", height: "30px", position: "absolute", border: "2px solid green", borderRadius: "50%"}}/>}
            <div className='quant-one-div-container'>
            
            
            </div>
            
            
            </div>
           
            
            </div>
            
            
        </div>
        
        </>
      )


}

export default QuantityOne;