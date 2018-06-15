const initialState = {
    user: {},
    isAuth: false,
    profile: {}
};

export default (state=initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isAuth: Object.keys(action.user).length > 0,
                user: action.user
            };

        default:
            return state;
    }
}