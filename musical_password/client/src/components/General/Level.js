import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerInput from '../Game/AnswerInput';
import { keyData } from './Sounds';

class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ''
        }
        this.playSound = this.playSound.bind(this);
    }
    
    playSound(ev) {
        ev.preventDefault();
        const { level, id } = this.props;
        const soundArr = [];
        for (var i = 0; i < level.answer.length; i++) {
            const sound = keyData[level.answer[i]].sound
            soundArr.push(sound);
        }
        function playRecur(arr) {
            if (arr.length) {
                const curr = arr[0];
                curr.on("end", () => playRecur(arr.slice(1)))
                curr.play()
            } else { soundArr.forEach(sound => sound.off("end")) }
        }
        playRecur(soundArr);
        
    }

    render() {
        const { playSound } = this;
        const {level, id} = this.props;
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Ready Player 1!</h1>
                    <br />
                    <h3>Level: {id} </h3>
                </div>
                <button className='btn btn-primary' onClick={playSound}>Play Sound</button>
                <AnswerInput level={this.props.level} />
            </div>
        );
    }
}

const mapState = ({ levels }, { match }) => {
    const id = match.params.id * 1;
    const level = levels.find(_level => _level.id === id)
    return {
        levels,
        level,
        id
    }
}

export default connect(mapState, null)(Level);