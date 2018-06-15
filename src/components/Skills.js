import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {skills} from "../constants/technologyConstants";
import CheckBox from './CheckBox';
import { createUser } from '../redux/actions/actions';
import SignIn from './SignIn';
import TextBox from "./TextBox";

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: Math.floor((Math.random() * 1000) + 1),
            title: '',
            skills: [],
            interests: []
        };
    }

    addSkills(value, skill) {
        if (value) {
            this.setState(prevState => ({
                skills: [...prevState.skills, skill]
            }))
        }
    }

    addInterests(value, interest) {
        if (value) {
            this.setState(prevState => ({
                interests: [...prevState.interests, interest]
            }))
        }
    }

    createProfile() {
        console.log('creating profile');
        console.log('skills', this.state.skills);
        console.log('interests ', this.state.interests);

        const user = {
            'id': this.state.id,
            'title': this.state.title,
            'email': this.props.user.email,
            'name': this.props.user.name,
            'skills': this.state.skills,
            'interests': this.state.interests
        };

        this.props.createUser(user);
    }

    handleInputChange(value) {
        this.setState({
            title: value
        })
    }

    render() {
        return (
            <div>
                { Object.keys(this.props.user).length === 0  ?
                    (
                        <div>
                            {this.props.isAuth ? '' : <SignIn />}
                        </div>
                    ) :
                    (
                        <div className='flex-container-column align-center'>
                            <img className='logo' src={require('../assets/M-logo.svg')} alt="logo"/>

                            <h2>
                                Welcome, {this.props.user.name}
                            </h2>

                            <TextBox placeholder='Job Title' onInputChange={(value) => this.handleInputChange(value)}/>


                            <fieldset className='field-set'>
                                <legend><h3>List the top 3 skills you wanna teach</h3></legend>
                                <div className='flex-container-row justify-space-around wrap'>
                                    <CheckBox interest={skills.JAVA} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                    <CheckBox interest={skills.JAVASCRIPT} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                    <CheckBox interest={skills.REACT} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                    <CheckBox interest={skills.HTML} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                    <CheckBox interest={skills.VUE} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                    <CheckBox interest={skills.PYTHON} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                    <CheckBox interest={skills.ANGULAR} onInputChange={(value, interest) => this.addSkills(value, interest)} />
                                </div>
                            </fieldset>


                            <fieldset className='field-set' style={{marginTop: '20px'}}>
                                <legend><h3>List the top 3 skills you wanna learn</h3></legend>
                                    <div className='flex-container-row justify-space-around wrap'>
                                    <CheckBox interest={skills.JAVA} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                    <CheckBox interest={skills.JAVASCRIPT} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                    <CheckBox interest={skills.REACT} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                    <CheckBox interest={skills.HTML} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                    <CheckBox interest={skills.VUE} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                    <CheckBox interest={skills.PYTHON} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                    <CheckBox interest={skills.ANGULAR} onInputChange={(value, interest) => this.addInterests(value, interest)} />
                                </div>
                            </fieldset>


                            <Link to={`/profile/${this.state.id}`} style={{marginTop: '30px'}}>
                                <img src={require('../assets/Button-Hover.svg')} alt="button-next"
                                           onClick={() => this.createProfile()}
                                />
                            </Link>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.authUser.isAuth,
        user: state.authUser.user,
    }
};

export default connect(mapStateToProps, {
    createUser
})(Skills);