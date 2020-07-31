import * as ACTION_TYPE from '../Actions/actionTypes'

const userState = {
    user_text: ''
}

const UserReducer = (state = userState, action) => {
    switch(action.type) {
        case ACTION_TYPE.USER_INPUT:
            return {
                ...state,
                user_text: action.payload
            }
            default:
                return state
    }
}

export default UserReducer