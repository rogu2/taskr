import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import agentReducer from './agentReducer'

export default combineReducers({
    task: taskReducer,
    agent: agentReducer
})