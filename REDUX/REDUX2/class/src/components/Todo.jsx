import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Action";

const Todo = () => {
     const state = useSelector((store) => store.todos);
console.log("========>",state);

     const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAdd = () => {
    dispatch(
      addTodo({
        title: text,
        satus: false,
      })
    );
  };
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>add</button>
      {state.map((t) => {
        return <li>{t.title}</li>
      })}
    </div>
  );
};

export default Todo;
