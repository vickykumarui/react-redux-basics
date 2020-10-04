/*
this file is written in node js to demonstrate that redux is independent libray from react
*/

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}
/*
 REDUCER - reduce is trongly connected to store it is only function that can change store, there is only one reducer even if we have multiple reducer it get combined to one 
 */

 const rootReducer = (state = initialState, action) => {
     // reducer is function that takes state and action as parameter and returns state
        return state;
 }


// STORE

const store = createStore(rootReducer);
console.log(store.getState());



// DISPATCHING ACTION


// SUBSCRIPTION