import React, { useState ,useEffect  } from 'react'
import Counter from './Counter'

const Todo = () => {
  const [todos,SetTods] = useState([])
  const [text,setText] =useState("")
  const [loading,setLoading] = useState(true)
  const [page,SetPage] = useState(1)
  useEffect(() => {
    console.log("Mounted Todo");
    getData()
    return () =>{
      console.log("UNMOUNTING" );
    }
  }, [page]);
  // ?_page=${page}&_limit=3
  const getData = async () => {
    const data = await fetch(`http://localhost:5000/todos?_page=${page}&_limit=3`).then((d) => d.json());
    SetTods(data)
    setLoading(false)
  }
  return loading ? (
    "Loading....."
  ) : (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} placeholder="🖊️add todo" />
      <button
        onClick={() => {
          const payload = {
            name: text,
            status: false,
          };
          fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then(() => {
            getData();
          });
          //axios.post("",payload)
        }}
      >
        Add Todo
      </button>
      {todos.map((t) => (
        <h3>{t.name}</h3>
      ))}
      <button
        onClick={() => {
          if (page <= 1) return;
          SetPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (page >= 3) return;
          SetPage(page + 1);
        }}
      >
        Next
      </button>
      <Counter />
    </div>
  );
}

export default Todo

// json-server db.json --port 5000 --watch