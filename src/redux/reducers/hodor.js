const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,
                hodor: action.hodor
            };
        default:
            return state;
    }
}