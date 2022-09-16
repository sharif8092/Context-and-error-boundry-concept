import { type } from "@testing-library/user-event/dist/type";
import {useReducer  , useState} from "react"
import "./Counter.css"

//use of reducer function is to modify the state the and return new state 
const ACTION_TYPE = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case ACTION_TYPE.INCREMENT:
        return { count: state.count + 1 };
  
      case ACTION_TYPE.DECREMENT:
        let newState = state.count - 1;
        if (newState <= 0) {
          return { count: 0 };
        }
       else {
        return { count: newState };

      }
      default :
      return state;
    }
  }


function Counter(){

     const [state, dispatch] = useReducer(reducer , {count:0})


    function increment(){
        dispatch({type:ACTION_TYPE.INCREMENT})
    }
    function decrement (){
        dispatch({type:ACTION_TYPE.DECREMENT})
    }


    return(
        <div className="counter">
            <button onClick={decrement}>-</button>
            <span> {state.count} </span>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default Counter;