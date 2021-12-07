import {OPERATIONS} from "./App"

export default function OperationButton({dispatch, operation}){
    return (<button 
        onClick={()=>dispatch(
            {
                type: OPERATIONS.CHOOSE_OP, 
                cache: {operation}
                }
                )}>
        {operation}</button>)
}



