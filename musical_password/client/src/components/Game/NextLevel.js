import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerInput from '../Game/AnswerInput';
import { Link } from 'react-router-dom';

class NextLevel extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(ev) {
        const { value, answer } = ev.target;
        const change = {};
        change["answer"] = value;
        this.setState(change);
    }

    render() {
        const { level, id, nextLevel } = this.props;
        const { handleChange } = this;
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Ready Player 1!</h1>
                    { (id + 1 < 5) ?
                    <h2>Congratulations You Have Unlocked the Next Level!</h2> :
                    <h2>Congratulations You Have Beaten the Game!</h2> 
                }
                    <br />
                    {
                        (id + 1 < 5) ?
                    <Link to={`/${nextLevel}`}><button>Go To Level: {nextLevel}</button></Link>
                    :
                    <Link to={`/nlp`}><button>Go To Your Prize</button></Link>
                }
                </div>
          </div> 
        )
    }
}

const mapState = ({ levels }, { match }) => {
    const id = match.params.id * 1;
    const nextLevel = id + 1;
    const level = levels.find(_level => _level.id === id)
    return {
        levels,
        level,
        nextLevel,
        id
    }
}

export default connect(mapState, null)(NextLevel);
