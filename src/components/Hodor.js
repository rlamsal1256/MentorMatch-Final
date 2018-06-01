import React, { Component } from 'react';
import { connect } from 'react-redux'

class Hodor extends Component {
    render() {
        return (
            <div>
                Hodor
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

export default connect(mapStateToProps, mapDispatchToProps)(Hodor);