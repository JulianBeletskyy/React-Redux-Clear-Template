import * as types from 'actions/types'

const initialState = {
	alert: {
		message: '',
		level: 'success',
		delay: 2000
	},
	modal: {
		open: false,
		title: '',
		component: null
	}
}

export default function ui(ui = initialState, action = {}) {
	switch (action.type) {
		case types.SET_ALERT:
			return {...ui, alert: action.data}
		case types.TOGGLE_MODAL:
			return {...ui, modal: action.data}
		case types.CLOSE_MODAL:
			return {...ui, modal: {...ui.modal, open: false}}
		default:
            return ui;
	}
}