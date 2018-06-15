import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleInputChange(event) {
        const value = event.target.checked;

        this.props.onInputChange(value, this.props.interest)
    }

    render() {
        return (
            <div style={{margin: '10px'}}>
                <input type="checkbox" value={this.props.interest} checked={this.state.checked} onChange={(e) => this.handleInputChange(e)} />
                <label>{ this.props.interest }</label>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        template: state.template
    }
};

const mapDispatchToProps = dispatch => {
    return {
        hodor: (hodor)=> { dispatch({type: 'HODOR', hodor: hodor}) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);