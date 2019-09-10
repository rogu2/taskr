import { 
    GET_AGENTS,
    AGENTS_ERROR,
    ADD_AGENT,
    DELETE_AGENT,
    SET_LOADING
} from '../actions/types'

const initialState = {
    agents: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_AGENTS:
            return {
                ...state,
                agents: action.payload,
                loading: false
            }
        case ADD_AGENT:
            return {
                ...state,
                agents: [...state.agents, action.payload],
                loading: false
            }
        case DELETE_AGENT:
            return {
                ...state,
                agents: state.agents.filter(agent => agent.id !== action.payload),
                loading: false
            }
        case AGENTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
        }
}