import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Hodor from './components/Hodor';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Hodor} />
                </Switch>
            </div>
        );
    }
}

export default App;
