import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/TodoFeature/action";
// import { store } from "../Redux/store";

const Todo = () => {
  const state = useSelector((store) => store.Mytodos.todos);
  // const state = useSelector((store) =>store,function equality(prev,updated){
  //   return true
  // } );
  console.log("SSSSS", state);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAdd = () => {
    // dispatch(
    //   addTodo({
    //     title: text,
    //     satus: false,
    //   })
    // );
    const payload = {
      title: text,
      satus: false,
    };

    fetch("http://localhost:5000/todos", {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => {
        getData();
      })
      .then(() => {
        setText("");
      });
  };
  console.log("rendinring Todo");
  useEffect(() => {
    getData();
  }, []);
  
  const getData = () => {
    fetch("http://localhost:5000/todos")
      .then((d) => d.json())
      .then((data) => {
        dispatch(addTodo(data));
      });
  };

  return (
    <div>
      <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>add</button>
      {state.map((t) => {
        return <li>{t.title}</li>;
      })}
    </div>
  );
};

export default Todo;
