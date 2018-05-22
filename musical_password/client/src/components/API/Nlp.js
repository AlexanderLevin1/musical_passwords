import React, { Component } from 'react';
import { connect } from 'react-redux';
var Sentiment = require('sentiment');
var sentiment = new Sentiment();



class SentTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(ev) {
        const { value } = ev.target;
        const change = {};
        change["name"] = value;
        this.setState({ text: value });
    }

    onSubmit(ev) {
        ev.preventDefault();
    }

    render() {
        const { handleChange, onSubmit } = this;
        const { text, isSubmit } = this.state;
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Ready Player 1!</h1>
                    <h2>Congratulations - Your Prize is a Text Analyzer!</h2>
                    <h3>Aren't You a Lucky Fish!</h3>
                    <br />
                </div>
                <div>
                    <form>
                        <label className="font-weight-bold">Enter Text To Analyze:</label>
                        <input
                            placeholder='TEXT'
                            name='name'
                            value={text}
                            className='form-control margin-b-10'
                            onChange={handleChange}
                        />
                        
                    </form>
                </div>
                <div>
                    <p>This is the Sentiment Score:</p>
                    Score: {sentiment.analyze(this.state.text).score}
                    <br />
                    Comparative: {sentiment.analyze(this.state.text).comparative}
                </div>
            </div>
        )
    }
}

export default connect(null, null)(SentTest)


