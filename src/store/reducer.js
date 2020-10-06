const initialState = {
    counter: 10
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter+1
            }
        case 'DECREMENT': 

            return {
                ...state,
                counter: state.counter-1
            }
        case 'ADD': 

            return {
                ...state,
                counter: state.counter + 10
            }
            case 'SUB': 
            return {
                ...state,
                counter: state.counter - 10
            }
        default:
            return state
    }
  
}

export default reducer