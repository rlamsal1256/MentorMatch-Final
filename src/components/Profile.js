import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            title: '',
            skills: [],
            interests: [],
            mentorRequested: false
        };
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id, 10);
        console.log(id);
        console.log(this.props.users);
        const profile = this.props.users.filter(profile => parseInt(profile.id, 10) === id);
        console.log('NAME', this.state.name);
        console.log(profile);

        if (profile && profile.length > 0) {
            this.setState({
                name: profile[0].name,
                title: profile[0].title,
                email: profile[0].email,
                skills: profile[0].skills,
                interests: profile[0].interests
            });
        }
    }

    requestMentor() {
        this.setState({
            mentorRequested: true
        })
    }

    render() {
        return (
            <div className='flex-container-column align-center'>
                <img className='logo' src={require('../assets/M-logo.svg')} alt="logo"/>
                <div className='profile-flex'>
                    <div className="image-cropper">
                        <img src="http://www.electricvelocity.com.au/Upload/Blogs/smart-e-bike-side_2.jpg"
                             className="rounded" alt="prof"/>
                    </div>
                    <div className="profile-header">
                        {this.state.name ? this.state.name : 'Kevin'}
                    </div>
                    <div className="profile-details">
                        {this.state.title ? this.state.title : 'Developer'}
                    </div>
                    <div className="profile-details">
                        {this.state.email ? this.state.email : 'a@a.com'}
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <div className="profile-header">Skills:
                        </div>
                        {this.state.skills && this.state.skills.map((skill, index) => (
                            <li className="profile-details no-style" key={index}>
                                {skill}
                            </li>
                        ))}
                    </div>

                    <div style={{marginTop: '20px'}}>
                        <div className="profile-header"> Interests:
                        </div>
                        {this.state.interests && this.state.interests.map((interest, index) => (
                            <li className="profile-details no-style" key={index}>
                                {interest}
                            </li>
                        ))}
                    </div>

                    <div style={{marginTop: '20px'}}>
                        {this.props.user.name === this.state.name ?
                            (
                                <Link to="/filter">
                                    <img src={require('../assets/Button-FindMatch.svg')} alt="button-next"
                                    />
                                </Link>
                            ):
                            (
                                <input className={this.state.mentorRequested ? 'request-done-button-large' : 'request-button-large'}
                                       type="button" onClick={() => this.requestMentor()}
                                       value={this.state.mentorRequested ? 'Message Sent' : 'Request a mentor'}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authUser.user,
        isAuth: state.authUser.isAuth,
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);