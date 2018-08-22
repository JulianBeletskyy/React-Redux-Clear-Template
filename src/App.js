import React, { Component } from 'react'
import { connect } from 'react-redux'
import routing from 'config/route' // Routes config
import { Route, Switch } from 'react-router-dom'
import * as pages from 'scenes'
import store, { history } from 'store'
import { setLocation } from 'actions/ui'
import Alert from 'components/alert'
import Modal from 'components/modal'
import './App.css'
import io from 'socket.io-client'

class App extends Component {
    constructor() {
        super()
        history.listen(location => {
            store.dispatch(setLocation(location.pathname))
        })
        const socket = io('http://localhost:3000')
        
        socket.on('connect', () => {
            console.log('connection')
        })
        socket.on('disconnect', () => {
            console.log('disconnect')
        })
    }

    printRoutes = (route, i) => <Route key={i} path={route.path} exact component={pages[route.component]} />

    render() {
        const key = 'public' //private
        return (
            <div className="App">
                <Switch>
                    { routing[key].map((route, i) => this.printRoutes(route, i)) }
                </Switch>
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
