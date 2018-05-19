import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
        <div className='jumbotron'>
        <h1>Ready Player 1!</h1>
        <br />
         <h3>Level: </h3>   
      </div>
        );
    }
}
  
  export default connect(null, null)(Home);