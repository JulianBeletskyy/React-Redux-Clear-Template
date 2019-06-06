import * as types from 'actions/types'

const initialState = {
	list: [],
}

const users = (users = initialState, action = {}) => {
	switch (action.type) {
		case types.SET_USERS_KEY:
			return {...users, [action.key]: action.data}
		
		default:
            return users;
	}
}

export default users