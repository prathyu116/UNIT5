import React, { useEffect, useState } from "react";

const Timer = ({ startTime, endTime }) => {
  

  const [counter, setCounter] = useState(startTime);

  useEffect(() => {
    let id = setInterval(() => {
      setCounter((prevVal) => {
        if (prevVal === endTime) {
          clearInterval(id);
          return endTime;
        } else {
          return prevVal + 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h2>Counter is : {counter}</h2>
    </div>
  );
};

export default Timer;
