import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    let id =setInterval(() => {
        // console.log("ttttt");
      setCount((prevvalue)=>{
          console.log(prevvalue);
        if(prevvalue <= 0) {
            clearInterval(id)
            return 0;
        }
        return prevvalue-1
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <h3>Count:{count}</h3>
    </div>
  );
};

export default Counter;
