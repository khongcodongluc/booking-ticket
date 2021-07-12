import React from 'react'
import { combineReducers } from 'redux'
import anouncementReducer from './anouncementReducer'
import filmReducer from './filmReducer';

const rootReducer = combineReducers({
    anouncement: anouncementReducer,
    film: filmReducer,
})

export default rootReducer;