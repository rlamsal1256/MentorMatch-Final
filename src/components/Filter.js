import React, { Component } from 'react';
import { connect } from 'react-redux';
import { skills } from "../constants/technologyConstants";
import CheckBox from './CheckBox';
import RequestButton from './RequestButton';
import { Link } from 'react-router-dom';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matchedProfiles: [],
            filters: [],
        };
    }

    componentDidMount() {
        this.applyFilters()
    }

    addFilters(value, filter) {
        if (value) {
            this.setState(prevState => ({
                filters: [...prevState.filters, filter]
            }), () => {
                this.applyFilters()
            });
        }
    }

    applyFilters() {
        let matchedProfiles = [];

        this.state.filters.forEach(filter => {
            this.props.users.forEach(user => {
                user.skills.forEach(skill => {
                    if (skill === filter) {
                        matchedProfiles.push(user);
                    }
                })
            })
        });

        const uniqueProfiles = [];
        matchedProfiles.forEach(profile => {
            if(!uniqueProfiles.includes(profile)) uniqueProfiles.push(profile);
        });

        console.log(matchedProfiles);
        console.log(uniqueProfiles);

        if (uniqueProfiles && uniqueProfiles.length > 0) {
            this.setState({
                matchedProfiles: uniqueProfiles
            })
        }
    }

    render() {
        const profiles = this.state.matchedProfiles;
        return (
            <div className='flex-container-column align-center'>
                <div className='filters wrap'>
                    <fieldset>
                        <legend><h3>Filter mentors by interests</h3></legend>
                        <div className='flex-container-row justify-space-around'>
                            <CheckBox interest={skills.JAVA} onInputChange={(value, interest) => this.addFilters(value, interest)} />
                            <CheckBox interest={skills.JAVASCRIPT} onInputChange={(value, interest) => this.addFilters(value, interest)} />
                            <CheckBox interest={skills.REACT} onInputChange={(value, interest) => this.addFilters(value, interest)} />
                            <CheckBox interest={skills.HTML} onInputChange={(value, interest) => this.addFilters(value, interest)} />
                            <CheckBox interest={skills.VUE} onInputChange={(value, interest) => this.addFilters(value, interest)} />
                            <CheckBox interest={skills.PYTHON} onInputChange={(value, interest) => this.addFilters(value, interest)} />
                            <CheckBox interest={skills.ANGULAR} onInputChange={(value, interest) => this.addFilters(value, interest)} />
                        </div>
                    </fieldset>
                </div>

                <div className='results'>
                    {
                        profiles.length === 0 ?
                            (
                                <div>
                                    Apply filters to see suggestions
                                </div>
                            ):
                            (
                                <div>
                                    {profiles.map((matchedProfile, index) => (
                                        <li key={index} className='matched-profile flex-container-row'>
                                            <Link className='flex-container-row' style={{flex: '4'}} to={`/profile/${matchedProfile.id}`}>
                                                <img className="img-circle" src={require('../assets/cat.jpeg')} alt="profile"/>
                                                <div className='flex-container-column justify-center' style={{ flex: '2', marginLeft: '20px'}}>
                                                    <h3>
                                                        {matchedProfile.name}
                                                    </h3>
                                                    <div>
                                                        {matchedProfile.title}
                                                    </div>
                                                    <div>
                                                        Skilled in:
                                                        <ul>
                                                            {matchedProfile.skills.map((skill, index) => (
                                                                <li key={index}>
                                                                    {skill}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div className='flex-container-row align-center' style={{flex: '1'}}>
                                                <RequestButton/>
                                            </div>
                                        </li>
                                    ))}
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        hodor: (hodor)=> { dispatch({type: 'HODOR', hodor: hodor}) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);