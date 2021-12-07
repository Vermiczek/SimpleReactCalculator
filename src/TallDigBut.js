import {OPERATIONS} from "./App"

export default function TallOperationButton({dispatch, operation}){
    return (<button 
        className = "tall_button" 
        onClick={()=>dispatch(
            {
                type: OPERATIONS.CHOOSE_OP, 
                cache: {operation}
                }
                )}>
        {operation}</button>)
}

