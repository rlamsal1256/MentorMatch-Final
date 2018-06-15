import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './components/Profile';
import Filter from './components/Filter';
import Skills from './components/Skills';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Skills} />
                    <Route exact path="/profile/:id" component={Profile} />
                    <Route exact path="/filter" component={Filter} />
                </Switch>
            </div>
        );
    }
}

export default App;
