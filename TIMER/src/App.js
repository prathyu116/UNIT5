import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log("Heloo");
      setTimer((p) => {
        if (p == 100) {
          clearInterval(timerRef.current);
          return 100;
        }

        return (p = p + 1);
      });

      return () => {
        clearInterval(timerRef.current);
      };
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>GOOGLE TIMER</h1>
      <h1>{timer}</h1>
      <button
        onClick={() => {
          clearInterval(timerRef.current);
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          timerRef.current = setInterval(() => {
            setTimer((p) => {
              if (p == 100) {
                clearInterval(timerRef.current);
                return 100;
              }

              return (p = p + 1);
            });
          }, 1000);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          clearInterval(timerRef.current);
          setTimer(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
