import React, { Component } from 'react'
import { connect } from 'react-redux'
import routing from 'config/route' // Routes config
import { Route, Switch } from 'react-router-dom'
import * as pages from 'scenes'
import store, { history } from 'store'
import { setLocation } from 'actions/ui'
import Alert from 'components/alert'
import Modal from 'components/modal'
import Loader from 'components/loader'
import './App.css'

class App extends Component {
    constructor() {
        super()
        history.listen(location => {
            store.dispatch(setLocation(location.pathname))
        })

        this.state = {token: false}

        this.getToken()
    }

    getToken = () => {
        setTimeout(() => {
            this.setState({token: true})
        }, 3000)
    }

    printRoutes = (route, i) => <Route key={i} path={route.path} exact component={pages[route.component]} />

    render() {
        const key = 'public' //private
        return (
            <div className="App">
                {
                    this.state.token
                    ?   <Switch>
                            { routing[key].map((route, i) => this.printRoutes(route, i)) }
                        </Switch>
                    :   <Loader />
                }
                <Alert />
                <Modal />
            </div>
        );
    }
}

const mapStateToProps = state =>
    ({
        ui: {
            lang: state.ui.lang
        }
    })

export default connect(
    mapStateToProps
)(App)
