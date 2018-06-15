import {data} from "../../constants/technologyConstants";

const initialState = data;

export default (state=initialState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return [
                ...state,
                action.user
            ];

        default:
            return state;
    }
}