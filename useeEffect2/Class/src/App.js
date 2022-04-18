import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./component/Counter";
import Todo from "./component/Todo";

function App() {
  const [show, Setshow] = useState(true);
  useEffect(()=>{
    console.log("use1");
    return ()=>{
      console.log("unMount1");
    }
  })
  useEffect(()=>{
    console.log("use2");
    return ()=>{
      console.log("unMount2");
    }
  },[])
  useEffect(()=>{
    console.log("use3");
    return ()=>{
      console.log("unMount3");
    }
  },[show])



  return (
    <>
      <div className="App">
     {show ?  <Todo /> : null}
     <button onClick={()=>{
       Setshow(!show )
     }}>{show ? "Hide" : "Show"} Todos</button>
      </div>
    </>
  );
}

export default App;



// useEffect(() => {
//   fetch(" http://localhost:5000/todos")
//     .then((d) => d.json())
//     .then((data) => {
//       console.log(data);
//       SetTodos(data);
//     });
// }, []);