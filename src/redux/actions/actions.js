import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? "/" : "http://localhost:5000/";

export function SignInUser(user_data) {
    return (dispatch) => {
        console.log('adding user..');
        axios.post(`${url}user`, user_data)
            .then(res => {
                let user = res.data;
                console.log('===========sign in============');
                console.log(user);
                console.log('===========sign in============');
                localStorage.setItem('Auth', JSON.stringify(user));
                dispatch({
                    type: 'SET_USER',
                    user
                })
            })
            .catch(err => console.log(err))
    }
}

export function createUser(user) {
    console.log('action', user);
    return (dispatch) => {
        dispatch({
            type: 'CREATE_USER',
            user
        })
    }
}
