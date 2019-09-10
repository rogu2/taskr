import {
    GET_TASKS,
    SET_LOADING,
    TASKS_ERROR,
    ADD_TASK
} from './types'

export const getTasks = () => async dispatch => {
    try {
        setLoading()

        const res = await fetch('/tasks')
        const data = await res.json()
    
        dispatch({
            type: GET_TASKS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.data
        })
    }
   
}

// Add Task
export const addTask = (task) => async dispatch => {
    try {
        setLoading()

        const res = await fetch('/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await res.json()

        dispatch({
            type: ADD_TASK,
            payload: data
        })


    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.data
        })
    }
}

// Sets loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}