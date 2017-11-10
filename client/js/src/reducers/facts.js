const initialState = [];

export default function facts(state = initialState, action) {
    if (action.type === 'ADD_FACT') {
        return [...state, action.payload]
    }else if(action.type === 'REMOVE_FACT'){

    }
    return state
}