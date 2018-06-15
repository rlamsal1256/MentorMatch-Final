import React, { Component } from 'react';

class TextBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleInputChange(event) {
        const value = event.target.value;

        this.props.onInputChange(value)
    }

    render() {
        return (
            <div>
                <input className='text-box' type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={(e) => this.handleInputChange(e)} />
            </div>
        );
    }
}

export default TextBox;