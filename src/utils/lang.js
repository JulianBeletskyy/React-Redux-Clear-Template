import store from 'store'
import * as list from 'lang_packages'

export const getLang = val => {
	if (typeof val !== 'string') {
		return val
	}
	const lang = store.getState().ui.lang
	const key = Object.keys(list[lang]).find(item => item.toLowerCase() === val.toLowerCase())

	return key ? list[lang][key] : val
}