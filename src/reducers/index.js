import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import ui from './ui.js'
import users from './users.js'

const reducer = combineReducers({
    routing: routerReducer,
    ui,
    users,
})

export default reducer