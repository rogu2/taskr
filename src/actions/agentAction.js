import {
    GET_AGENTS,
    ADD_AGENT,
    DELETE_AGENT,
    SET_LOADING,
    AGENTS_ERROR
} from './types'

// Get Agents
export const getAgents = () => async dispatch => {
    try {
        setLoading()

        const res = await fetch('/agents')
        const data = await res.json()
    
        dispatch({
            type: GET_AGENTS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: AGENTS_ERROR,
            payload: err.response.statusText
        })
    }
   
}

// Set Loading
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

// Add Agent
export const addAgent = agent => async dispatch => {
    try {
        setLoading()

        const res = await fetch('/agents', {
            method: 'POST',
            body: JSON.stringify(agent),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await res.json()

        dispatch({
            type: ADD_AGENT,
            payload: data
        })
        
    } catch (err) {
        dispatch({
            type: AGENTS_ERROR,
            payload: err.response.statusText
        })
    }
}


// Delete Agent
export const deleteAgent = id => async dispatch => {
    try {
        setLoading()

        await fetch(`/agents/${id}`, {
            method: 'DELETE'
        })
    
        dispatch({
            type: DELETE_AGENT,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: AGENTS_ERROR,
            payload: err.response.statusText
        })
    }
}