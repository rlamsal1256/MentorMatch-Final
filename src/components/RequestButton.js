import React, { Component } from 'react';

class RequestButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mentorRequested: false
        }
    }

    requestMentor() {
        this.setState({
            mentorRequested: true
        })
    }

    render() {
        return (
            <div>
                <input className={this.state.mentorRequested ? 'request-done-button' : "request-button"}
                    type="button" onClick={() => this.requestMentor()}
                       value={this.state.mentorRequested ? 'Message Sent' : 'Request a mentor'}
                />
            </div>
        );
    }
}
export default RequestButton