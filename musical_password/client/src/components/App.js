/* eslint-disable */
import React from 'react';
import { HashRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { connect} from 'react-redux';
import { getUsersFromServer, getLevelsFromServer } from '../store';

import Home from './General/Home';

class App extends React.Component{
    componentDidMount() {
        const { getUsers, getLevels } = this.props;
        getUsers();
        getLevels();
    }
    render() {
        return (
            <Router>
            
            </Router>
        )
    }
}
