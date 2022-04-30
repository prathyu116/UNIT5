

//Acton types
export const ADD_COUNT = "ADD_COUNT"
export const SUB_COUNT = "SUB_COUNT";
export const ADD_TODO = "ADD_TODO";



//Action Creator-this is for re useability
export const addCount = (data) =>{
    return {
        type:ADD_COUNT,
        payload:data
    }
}
export const subCount = (data) =>{
    return {
      type: SUB_COUNT,
      payload: data,
    };
}
export const addTodo = (data) =>{
    return {
      type: ADD_TODO ,
      payload: data,
    };
}

 


















