import {OPERATIONS} from "./App"

export default function DigitButton({dispatch, digit}){
    return (<button onClick={()=>dispatch({type: OPERATIONS.ADD_DIGIT, cache: {digit}})}>
        {digit}</button>)
}

