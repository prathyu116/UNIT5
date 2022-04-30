import { legacy_createStore as createStore } from 'redux'
import { counterReducer } from "./Reducer";

//ivdea second argument anu initial state
export const store = createStore(counterReducer, { counter: 0,todos:[] });

// store.subscribe(()=>{
//     console.log(store.getState());
// })