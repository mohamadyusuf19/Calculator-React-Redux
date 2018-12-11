export const PRESS_BUTTON = 'PRESS_BUTTON';
export const PRESS_EQUALS = 'PRESS_EQUALS';
export const PRESS_RESET = 'PRESS_RESET';
export const SELECT_HISTORY = 'SELECT_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

export const pressButton = value => {
    return {
        type: PRESS_BUTTON,
        value
    }
}

export const pressEqual = () => {
    return {
        type: PRESS_EQUALS
    }
}

export const pressReset = () => {
    return {
        type: PRESS_RESET
    }
}

export const selectHistory = id => {
    return {
        type: SELECT_HISTORY,
        id
    }
}

export const clearHistory = () => {
    return {
        type: CLEAR_HISTORY
    }
}