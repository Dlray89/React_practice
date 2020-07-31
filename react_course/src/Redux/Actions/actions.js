import * as ACTION_TYPES from "./actionTypes"



export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS,
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
}

export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    }
}
export const userInput = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT,
        payload: text
        
    }
}
