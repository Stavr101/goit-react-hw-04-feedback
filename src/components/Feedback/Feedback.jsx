import { Component } from 'react';
import Block from './Block';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './FeedbackResul';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();

    if (!total) {
      return 0;
    }
    const value = this.state.good;
    const result = (value / total) * 100;
    return Number(Math.round(result));
  }

  leaveFeedback = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];

      return { [propertyName]: value + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Block title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            leaveFeedback={this.leaveFeedback}
          />
        </Block>
        <Block title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercent={positivePercent}
          />
        </Block>
      </div>
    );
  }
}
