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
            }));
            this.applyFilters()
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

        if (matchedProfiles && matchedProfiles.length > 0) {
            this.setState({
                matchedProfiles: matchedProfiles
            })
        }
    }

    render() {
        const profiles = this.state.matchedProfiles.length === 0 ? this.props.users : this.state.matchedProfiles;
        return (
            <div className='flex-container-column'>
                <div className='filters'>
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
                    {profiles.map((matchedProfile, index) => (
                        <li key={index} className='matched-profile flex-container-row'>
                            <Link className='flex-container-row' style={{flex: '4'}} to={`/profile/${matchedProfile.id}`}>
                                <img className="img-circle" src={matchedProfile.picture} alt="profile"/>
                                <div className='flex-container-column justify-center' style={{ flex: '2', marginLeft: '20px'}}>
                                    <h3>
                                        {matchedProfile.name}
                                    </h3>
                                    <div>
                                        {matchedProfile.title}
                                    </div>
                                </div>
                            </Link>

                            <div className='flex-container-row align-center' style={{flex: '1'}}>
                                <RequestButton/>
                            </div>
                        </li>
                    ))}
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