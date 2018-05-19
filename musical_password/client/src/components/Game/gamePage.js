import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserOnServer} from '../../store';

class GamePage extends Component {
    constructor() {
        super();
        this.state = {
            level: 1;
        }
        this.handleChange = this.handleChange.bind(this);
        this.onApplyAnswer = this.onApplyAnswer.bind(this);
    } 

    handleChange(ev) {
        const { value, answer } = ev.target;
        const change = {};
        change[name] = value;
        this.setState(change);
    }
// Check this????
    onApplyAnswer(ev) {
        ev.preventDefault();
        const { levels } = this.props;
        const { name } = this.state;
        const uAnswer = levels[user.level].answer
        const isMatch = name === 
        if (level) {
            updateUser({ id, })
        }

    }
}