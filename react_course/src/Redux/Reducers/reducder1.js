import * as ACTION_TYPES from '../Actions/actionTypes'


const initState = {
    stateprops1: false,
    
}

const Reducer1 = (state = initState, action) => {
    switch(action.type) {
        case ACTION_TYPES.SUCCESS:
        return {
            ...state,
            stateprops1: true
        }
        case ACTION_TYPES.FAILURE:
            return {
                ...state,
                stateprops1: false
            }
        
            default:
                return state
    }
}

export default Reducer1