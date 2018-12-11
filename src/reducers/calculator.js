import {
    PRESS_BUTTON, 
    PRESS_EQUALS, 
    PRESS_RESET, 
    SELECT_HISTORY, 
    CLEAR_HISTORY
} from '../actions'

const initialState = {
    screen: '',
    history: []
}

export default (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case PRESS_BUTTON:
            return { ...state, screen: (state.screen + '' + action.value) }
        case PRESS_EQUALS: 
            const newState = { ...state }
            newState.screen = (eval(state.screen))
            newState.history = state.history.concat(`${state.screen}`)
            return newState
        case PRESS_RESET:
            return { ...state, screen: '' }
        case SELECT_HISTORY:
            return { ...state, screen: state.history[action.id] }
        case CLEAR_HISTORY:
            return { ...state, history: [] }
        default:
            return state
    }
}