import React, { Component } from 'react';
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import {
    SignInUser,
} from './../redux/actions/actions';
import TextBox from "./TextBox";

class SignIn extends Component {

    onInputChange(value) {
        // console.log(value);
    }

    render() {
        const responseGoogle = (res) => {
            let postData = {
                name: res.w3.ig,
                provider: 'google',
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            };

            console.log(postData);

            // build our user data
            this.props.SignInUser(postData);
        };

        return (
            <div className='flex-container-column align-center' >
                <img className='logo' src={require('../assets/M-logo.svg')} alt="logo"/>
                <TextBox placeholder='Email' onInputChange={(value) => this.onInputChange(value)}/>
                <TextBox placeholder='Password' onInputChange={(value) => this.onInputChange(value)}/>
                <input className="button" type="button" value="Sign In"/>
                <div style={{margin: '10px'}}>
                    Or
                </div>
                <GoogleLogin
                    className='google-login'
                     clientId="886637869712-573t01u5erqv7dh8ilt0rbi7mftki3ts.apps.googleusercontent.com"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle} >
                     SignIn with Google
                </GoogleLogin>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
};

export default connect(mapStateToProps, {
    SignInUser
})(SignIn);