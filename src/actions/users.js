import * as types from './types'
import { get, post } from 'api'

export const getUsers = () => dispatch => {
	return get(`users`).then(res => {
		if (res.statusCode === 200) {
			dispatch(setUsersKey('list', res.data))
		}
	})
}

export const sendReject = data => dispatch =>
	post(`posts`, data)
	.then(res => res.statusCode === 201)

export const setUsersKey = (key, data) =>
	({
		type: types.SET_USERS_KEY,
		key,
		data
	})