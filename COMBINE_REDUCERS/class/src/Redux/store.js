import { legacy_createStore as createStore ,combineReducers} from 'redux'
import { counterReducer } from "./CounterFeature/reducer";
import { TodoReducer } from "./TodoFeature/reducer";

const rootReducer = combineReducers({
    Mycounter:counterReducer,
    Mytodos:TodoReducer
})

//ivdea second argument anu initial state
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(()=>{
//     console.log(store.getState());
// })
//{ counter: 0,todos:[]

console.log("----->",store.getState());