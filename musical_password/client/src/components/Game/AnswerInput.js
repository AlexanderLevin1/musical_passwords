import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NextLevel} from './NextLevel';
import { Link, Redirect } from 'react-router-dom';

class AnswerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
           answer: '',
           redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onApplyAnswer = this.onApplyAnswer.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    } 

    handleChange(ev) {
        const { value, answer } = ev.target;
        const change = {};
        change["answer"] = value;
        this.setState(change);
    }

    onApplyAnswer(ev) {
        ev.preventDefault();
        const { level } = this.props;
        const { answer } = this.state;
        const isMatch = answer === level.answer
        if (isMatch) {
            this.setState({ redirect: true })
        }
        this.setState({ answer: 'Try Again!' });
    }

    renderRedirect() {
        const levelId = window.location.hash.slice(2)
        if (this.state.redirect) {
            return <Redirect to={`nextLevel/${levelId}`}/>
        }
    }

    render() {
        const { answer, redirect } = this.state;
        const { level } = this.props;
        const { handleChange, onApplyAnswer } = this;
        return (
            <div>
            <div>
              <label className="font-weight-bold">Which Keys Unlock Me?</label>
              <input
                placeholder='Answer'
                name='name'
                value={answer}
                className='form-control margin-b-10'
                onChange={handleChange}
              />
              <button className='btn btn-primary' onClick={onApplyAnswer}>Submit Answer</button>
              {this.renderRedirect()}
            </div>
          </div> 
        )
    }
}

const mapState = ({ levels, level }) => {
    // const levelId = level.id
    return { levels }
}

export default connect(mapState, null)(AnswerInput);