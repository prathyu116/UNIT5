//Acton types
export const ADD_TODO = "ADD_TODO";

//Action Creator-this is for re useability

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};
