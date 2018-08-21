import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import { setAlert } from 'actions/ui'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

class Alert extends Component {

    createNotification = (type, text, delay) => {
		NotificationManager[type](text, '', delay)
		store.dispatch(setAlert())
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.ui.alert.text) {
			this.createNotification(nextProps.ui.alert.level, nextProps.ui.alert.text, nextProps.ui.alert.delay)
		}
	}

    render() {
        return <NotificationContainer />
    }
}

const mapStateToProps = state =>
    ({
        ui: {
            alert: state.ui.alert
        }
    })

export default connect(
    mapStateToProps
)(Alert)
