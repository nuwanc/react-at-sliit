import React, { Component } from 'react';
import Comments from './Comments';
import CommentForm from './CommentForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CommentForm/>
        <Comments/>
      </div>
      
    );
  }
}

export default App;
