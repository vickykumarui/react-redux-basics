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
     console.log("state inside reducer", state);
     if(action.type === 'INC_COUNTER'){
         return {
             ...state,
             counter: state.counter + 1
         }
     }

     if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.pay_load.value
        }
    }

    return state
       
 }


// STORE

const mystore = createStore(rootReducer);
 console.log(mystore.getState());



// DISPATCHING ACTION
mystore.dispatch({type: 'INC_COUNTER'});
mystore.dispatch({type: 'ADD_COUNTER', pay_load : {value: 10} });
console.log(mystore.getState());
// SUBSCRIPTION