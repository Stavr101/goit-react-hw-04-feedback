import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {good} </p>
          <p>Neutral: {neutral} </p>
          <p>Bad: {bad} </p>
        </div>
      </div>
    );
  }
}
