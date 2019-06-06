import * as types from './types'

export const setAlert = (text = '', level = 'success', delay = 2000) =>
	({
        type: types.SET_ALERT,
        data: {text, level, delay}
    })

export const toggleModal = (open = false, title = '', component = null) =>
	({
        type: types.TOGGLE_MODAL,
        data: {open, title, component}
    })

export const closeModal = () => dispatch => {
	dispatch({
        type: types.CLOSE_MODAL,
    })
    return Promise.resolve()
}
	