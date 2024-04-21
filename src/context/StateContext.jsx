import { createContext, useState } from "react";

export const StateContext = createContext()

function StateProvider({ children }){
    const [isClickedCorrect, setIsClickedCorrect] = useState(null);
    const [isClickedCorrectOne, setIsClickedCorrectOne] = useState(null);
    const [isClickedCorrectTwo, setIsClickedCorrectTwo] = useState(null);
    const [isClickedCorrectThree, setIsClickedCorrectThree] = useState(null);
    const [userHasClicked, setUserHasClicked] = useState(false);
    const [userHasClickedOne, setUserHasClickedOne] = useState(false);
    const [userHasClickedTwo, setUserHasClickedTwo] = useState(false);
    const [userHasClickedThree, setUserHasClickedThree] = useState(false);
    
    function handleClickCorrect(){
        setUserHasClicked(true)
        setIsClickedCorrect(true)   
     }
     
     function handleClickWrong(){
        setUserHasClicked(true)
        setIsClickedCorrect(false)      
     } 
      
     function handleClickWrongOne(){
       setUserHasClickedOne(true)
       setIsClickedCorrectOne(false)
     }

     function handleClickWrongTwo(){
        setUserHasClickedTwo(true)
        setIsClickedCorrectTwo(false)      
     } 

     function handleClickWrongThree(){
        setUserHasClickedThree(true)
        setIsClickedCorrectThree(false)      
     } 
     
     function handleReset(){
       setUserHasClicked(false)
       setUserHasClickedOne(false)
       setUserHasClickedTwo(false)
       setUserHasClickedThree(false)
     }
    return (
        <StateContext.Provider value={{ isClickedCorrect, setIsClickedCorrect, isClickedCorrectOne, setIsClickedCorrectOne, isClickedCorrectTwo, setIsClickedCorrectTwo, isClickedCorrectThree, setIsClickedCorrectThree, userHasClicked, setUserHasClicked, userHasClickedOne, setUserHasClickedOne, handleClickCorrect, handleClickWrong, handleReset, userHasClickedTwo, setUserHasClickedTwo, handleClickWrongOne, handleClickWrongTwo, userHasClickedThree, setUserHasClickedThree, handleClickWrongThree }}>
            {children}
        </StateContext.Provider>
    );
}

export default StateProvider;