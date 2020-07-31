Three Principle of Redux:

`1st Principle`: There is only one source of truth//all state is store in one object
`2nd Principle`: State is read only
`3rd Priciple`: Changes are made with Pure Functions




# Action Creators
* Functions thata returns action
* Can dispatch actions asynchronously
* A function which dispatches a normal action
* Allows for dynamic setting the payload properly
* No Changes require to the reducer

# Example: Action Creators  
    (user_input_text) => (type: "USER_INPUT", payload:{(text: user_input_text)}   

# Reducers
* Directly Changes the Redux state
* Must be `pure` or it `can't be asynchronously`
* Takes `state` and `action` as parameters
* Usually setup as a switch statement
* Each case statement haas to match an action type

# Example: Reducer

case: ACTION_TYPES.LOGIN_SUCCESS:
    return {
        ...state,
        isAuth: true
    }



