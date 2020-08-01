import React, {Component} from 'react'
import * as ACTION_TYPES from '../Redux/Actions/actionTypes'
import * as ACTIONS from "../Redux/Actions/actions"
import { connect } from "react-redux"

import Auth from "../utils/auth"


const auth = new Auth()
class Container extends Component {

    render(){
        const user_text = 'text 1'
        return(
            <div>
                <button onClick={() => auth.login()} >Login</button> <br />
               <button onClick={() => console.log(this.props.stateprops1)}> Get State</button> <br />
               <button onClick={() => this.props.action1()}>Dispatch Action 1</button><br />
               <button onClick={() => this.props.action2()}>Dispatch action 2</button>
               <p>---------------------------</p>

              <button onClick={() => this.props.actionCreator1()}>Action Creator 1</button> <br />
              <button onClick={() => this.props.actionCreator2()}>Action Creator 2</button>
              <p>----------------------------------</p>
              <button onClick={() => this.props.actionCreator3(user_text)} >Action Creator 3</button>

              {this.props.user_text
              ? <div>{this.props.user_text}</div>
              : null }
            </div>
        )
    }
}

//return a object which has a key props of stateprop with value of state.stateprop
function mapStateToProps(state) {
    return {
        stateprops1: state.Reducer1.stateprops1,
        user_text: state.user_reducer.user_text
    }
}

//how to change state by dispatching actions. Actions have optional. returning a key value pair. the name of the keys up to use. the value of the keys is an arrow function that calls the dispatch methods. the dispatch method takes the value an action as an agrement and gets passed through to the reducer
function mapDispatchToProps(dispatch) {
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        actionCreator1: () => dispatch(ACTIONS.success()),
        actionCreator2: () => dispatch(ACTIONS.failure()),
        actionCreator3: (text) => dispatch(ACTIONS.userInput(text))
    }
}

//connect connects react with redux. Read only = mapsStateToProps, dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Container)