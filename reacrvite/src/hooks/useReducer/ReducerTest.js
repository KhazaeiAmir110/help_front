export const initialState = {
    loading: false,
    error: false,
    fact: ""
}

export const reducerState = (state, action) => {
    switch (action.type) {
        case "FETCH_START": {
            return {loading: true, error: false};
        }
        case "FETCH_SUCCESS": {
            return {loading: false, error: false, fact: action.data};
        }
        case "FETCH_FAIL": {
            return {loading: false, error: true};
        }
    }
}
