// Declarative code
// Pure function
//    1. always accept and always return
//    2. no mutation
//    3. no global states
//    4. calling same function again, should always give same result: Idempotency

// Redux: Single Source Of Truth

// Init
// Get
// Update

// Context is NOT a state mgmt
// Redux is state management

// Actions
// Always Objects: { type: something, payload: something }

// Add Count 1: { type: "ADD_COUNT", payload: 1 }
// Change Theme: { type: "TOGGLE_THEME" } // payload is optional
// Login True:   { type: "LOGIN", payload: true  }
// Dec Counter: { type: "DEC_COUNT", payload: 1 }

// Dispatch: function

// Store: state of entire App.
// { counter: 0, theme: "light", isLoggedIn: false, usersList: [], cartItems: [] }


//reducer
/*
# always recive statw,Action
# Always return a new updated state
*/
//PURE fun OR REDUCE fun
const reduce = (state,action)=>{
if(action.type==="ADD_COUNT"){
    return { ...state , counter: store.counter + action.payload };
}
if(action.type === "TOGGLE_THEME"){
    return {...state,theme:state.theme === "light" ? "dark" : "light"}
}
} 





