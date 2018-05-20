/* eslint-disable */
import React from 'react';
import { HashRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLevelsFromServer } from '../store';
import { Howl, Howler } from 'howler'
import { keyData } from './General/Sounds';

import Level from './General/Level';
import NextLevel from './Game/NextLevel';
import SentTest from './API/Nlp';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount() {
        const { getLevels } = this.props;
        window.addEventListener("keydown", this.onKeyDown)
        getLevels();
    }

    onKeyDown(ev) {
        if (ev.key in keyData) {
            const sound = keyData[ev.key].sound
            sound.play();
        }
    }

    render() {
        return (
            <Router>
                <div
                    onKeyDown={this.onKeyDown}
                    tabIndex="0" >
                    <Switch>
                        <Route path='/nlp' component={SentTest} />
                        <Route exact path='/:id' component={Level} />
                        <Route exact path='/nextLevel/:id' component={NextLevel} />
                    </Switch>
                </div>
            </Router>
        )
    }
}


const mapDispatch = (dispatch) => {
    return {
        getLevels: () => dispatch(getLevelsFromServer())
    }
}

export default connect(null, mapDispatch)(App)
