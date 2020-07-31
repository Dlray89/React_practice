import React, { Component } from "react"
import Header from "./Container/Header"
import Component1 from "./Functional/Component"

import Container from "./Container/Container"
import { Router, Route, Switch } from "react-router-dom"
import history from "./utils/history"

class Routing extends Component {

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                        <Route exact path='/' component={Container} />

                        <Route path='/component1/:id' render={(props) => <Component1 {...props} />} />
                       
                        </Switch>
                    </div>


                </Router>
            </div>
        )
    }
}

export default Routing