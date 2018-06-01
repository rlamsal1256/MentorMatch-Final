import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/";

export function hodor() {
    return (dispatch) => {
        axios.get(`${url}hodor`)
            .then(res => {
                dispatch({ type: 'HODOR', res })
            })
            .catch(err => {
                console.log(err);
            })
    }
}