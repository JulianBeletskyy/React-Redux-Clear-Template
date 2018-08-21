import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import ui from './ui.js'

const reducer = combineReducers({
    routing: routerReducer,
    /* Add your reducers here */
    ui,
})

export default reducer