import { legacy_createStore as createStore } from "redux";
//Action Types
const ADD_COUNT="ADD_COUNT"
const ADD_TODO="ADD_TODO"

//Action Creators
const addTodo = (title)=>{
    return {
        type:ADD_TODO,
        payload:{
            tittle:title,
            status:false
        }
    }
}

//store
const reducer = (store, action) => {
  //   if (action.type === "ADD_COUNT") {
  //     return { ...store, counter: store.counter + action.payload };
  //   }
  //   if (action.type === "ADD_TODO") {
  //         return {...store,todos:[...store.todos,action.payload]}
  //   }
  //   return { ...store };
  switch (action.type) {
    case ADD_COUNT:
      return { ...store, counter: store.counter + action.payload };

    case ADD_TODO:
      return { ...store, todos: [...store.todos, action.payload] };

    default:
      return store;
  }
};

const initState = {
  counter: 0,
  todos: [],
  theme: "dark",
};
const store = createStore(reducer, initState); //useState(init)
console.log("BEFORE", store.getState());

store.dispatch({ type: "ADD_COUNT", payload: 1 });
console.log("AFTER", store.getState());

store.dispatch(addTodo("Learn TYPE"));
console.log("AFTER DIS", store.getState());
