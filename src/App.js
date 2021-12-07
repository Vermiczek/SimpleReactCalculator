import "./App.css"
import DigitButton from "./DigBut"
import TallDigitButton from "./TallDigBut"
import { useReducer } from "react"
import TallOperationButton from "./TallDigBut"
import OperationButton from "./OpButton"
import { useEffect } from "react"
import { useState } from "react"

export const OPERATIONS = {
    ADD_DIGIT: 'add_digit',
    CLEAR: 'clear',
    DELETE: 'delete',
    EQUATE: 'equate',
    CHOOSE_OP: 'choose_op'
}


function reducer(state, {type, cache}){

    switch(type){
        case OPERATIONS.ADD_DIGIT:
            if(cache.digit==="0"&&state.currentOperand==="0")
            {
                return state;
            }
            if(cache.digit=="."&&(state.currentOperand[(state.currentOperand.length-1)]=="."))
            {
               return state
            }
            if(!state.currentOperand!="null")
                if((cache.digit>="0"&&cache.digit<="9")||cache.digit=="."){
                    return{
                     ...state,
                       currentOperand: `${state.currentOperand || ""}${cache.digit}`,
            }
        }


        case OPERATIONS.CLEAR:
                  return {}
            
            
            

        case OPERATIONS.CHOOSE_OP:
              if (state.currentOperand == null) {
                return {
                  ...state,
                  operation: cache.operation,
                }
              }
              if (state.previousOperand == null) {
                return {
                  ...state,
                  operation: cache.operation,
                  previousOperand: state.currentOperand,
                  currentOperand: null,
                }
              }
            
          
          
          case OPERATIONS.EQUATE:
                if (state.previousOperand !== null && state.currentOperand!== null && state.operation !== null) {
                  return {
                    ...state,
                    previousOperand: Equate(state.previousOperand, state.currentOperand, state.operation),
                    currentOperand: null,
                  }
                }
                if (state.currentOperand === null||state.previousOperand===0) {
                    return state
                  
                }

            case OPERATIONS.DELETE:
              if(state.currentOperand!=null)
              {
                return {...state,
                  currentOperand: deleteDigit(state.currentOperand),
                }}
              else{
                return state
              }
            }}


function deleteDigit(number)
{
 number=number.slice(0,number.length-1);
 return number
}           

function Equate(operand1, operand2, operator)
{
  if(operator === "+")
  {
    if(operand1===null)
      operand1 = 0;
    if(operand2===null)
      operand2 = 0;
    return (parseFloat(operand1)+parseFloat(operand2)).toString()
  }
  if(operator === "-")
  {
    if(operand1===null)
      operand1 = 0;
    if(operand2===null)
      operand2 = 0;
    return (parseFloat(operand1)-parseFloat(operand2)).toString()
  }
  if(operator ==="*")
  {
    if(operand1===null)
      operand1 = 0;
    if(operand2===null)
      operand2 = 0;
    return (parseFloat(operand1)*parseFloat(operand2)).toString()
  }
  if(operator ==="/")
  {
    if(operand1===null)
      operand1 = 0;
    if(operand2===null)
      operand2 = 0;
    return (parseFloat(operand1)/parseFloat(operand2)).toString()
  }
}


function setDefaultCount(state)
{
  state.currentOperand = 0;
  state.previousOperand = 0;
}


function App(){


    const [{currentOperand, previousOperand, operation}, dispatch] =
    useReducer(reducer,{})


    return (
        <div className = "calculator_grid">
            <div className = "output">
                <div className= "previous_operand"> 
                {previousOperand}
                </div>
                 <div className= "current_operation">
                {operation}
                </div>
                <div className= "current_operand">
                {currentOperand}
                </div>
            </div>
            <button className="wide_button"  onClick={() => dispatch({ type: OPERATIONS.CLEAR })}
      >
        AC
      </button>
            <button onClick={()=>dispatch({type:OPERATIONS.DELETE})}>DEL</button>
            <OperationButton operation="/" dispatch={dispatch}/>
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <OperationButton operation="*" dispatch={dispatch} />
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <OperationButton operation="-" dispatch={dispatch} />
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <TallOperationButton operation="+" dispatch={dispatch} />
            <DigitButton digit="." dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />
            <button onClick={()=>dispatch({type:OPERATIONS.EQUATE})}>=</button>
            </div>
    )
}

export default App