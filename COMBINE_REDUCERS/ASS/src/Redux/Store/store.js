import {createStore, combineReducers} from 'redux';

import {TodoReducer} from "../Todos/reducer"
import { AuthReducer} from "../AuthFeature/reducer"

const rootReducer = combineReducers({
    todoState : TodoReducer,
    AuthState : AuthReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )