import { useReducer } from "react";

  const initialState = { count: 0, step: 1}


function reduce(state, action){

   if ( action.type ===  "inc")
  return { ...state, count: state.count + state.step }

   else if(action.type === "dec")
    return { ...state, count: state.count- state.step}

  else if(action.type === "setCount")
    return {  ...state, count: action.payload }
  
  else if (action.type === "reset") 
    return  initialState 
  else
    return {...state, step: action.payload}
  // if (action.type === "dec" || action.type ===  "inc")
  //   return state.count + action.payload 
  // else 
  //   return action.payload
  

}

function DateCounter() {
 // const [count, setCount] = useState(0);
 //const [step, setStep] = useState(1);



  const [state, dispatch] = useReducer( reduce ,initialState);

  const {count , step } = state

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type: "dec", payload: -1})
    // setCount((count) => count - 1);
   // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({type: "inc", payload: 1})
    // setCount((count) => count + 1);
   // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({type: "setCount", payload: Number(e.target.value)})
   // dispatch(e.target.value)
   // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({type: "setStep", payload: Number(e.target.value)})
   // setStep(Number(e.target.value));
  };

  const reset = function () {
   // setCount(0);
    dispatch({type: "reset"});
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} min="0" />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
