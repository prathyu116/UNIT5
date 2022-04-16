import { useRef, useState } from 'react';
import './App.css';
import From from './componets/From';
import Kounter from './componets/Kounter';

function App() {
  const[counter,setCounter]=useState(0)
  // const[ref,setX]=useState(1)
  // // let x =1
  const ref = useRef(10)
  console.log("X is intial",ref);
  return (
    <div className="App">
      <h1>counter:{counter} </h1>
      {/* <From /> */}
      <button onClick={()=>{
        setCounter(counter+1)
      }}> change counter</button>
      <button onClick={()=>{
        ref.current +=1
        // setX(ref+1)
        // x=x+1
        console.log("x is changed",ref)
      }}>Addx </button>
     <Kounter />
    </div>
  );
}

export default App;
