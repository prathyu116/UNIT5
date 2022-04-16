import React, { useEffect, useRef, useState } from 'react'
import "../App.css"
const Kounter = () => {
    const [kounter,setKounter]=useState(10)
    const countRef =useRef(null) // {curr:Null}
    const divRef = useRef(null); 
    useEffect(()=>{
       
       countRef.current= setInterval(() => {
            setKounter((p)=>p-1)
        }, 1000);
    },[])
  return (
    <div>
      <h3>counterrrrrr:{kounter}</h3>
      <button
        onClick={() => {
          clearInterval(countRef.current);
          console.log(kounter);
        }}
      >
        pause
      </button>
      <button
        onClick={() => {
           countRef.current = setInterval(() => {
             setKounter((p) => p - 1);
           }, 1000);
        }}
      >
        start
      </button>

      <button
        onClick={() => {
           clearInterval(countRef.current);
          setKounter(0);
        }}
      >
        Reset
      </button>
      <div ref={divRef} className="divR">xxxx</div>
      <div className="divB">xxxx</div>
      <div className="divG">xxx</div>
      <button onClick={()=>{
        divRef.current.scrollIntoView({behavior: "smooth"});
      }}>GOTOP</button>
    </div>
  );
}


export default Kounter