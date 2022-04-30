import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "../Redux/Action";
import { store } from "../Redux/store";

const Counter = () => {
    const state = useSelector((store) => store.counter);
    const dispatch = useDispatch();
    console.log(state);
  return (
    <div>
      <h1>Counter : {state}</h1>
      <button
        onClick={() => {
          // store.dispatch(addCount(1))
          dispatch(addCount(1));
        }}
      >
        add1
      </button>
      <button onClick={()=>{
          dispatch(subCount(1))
      }}>sub1</button>
    </div>
  );
}

export default Counter