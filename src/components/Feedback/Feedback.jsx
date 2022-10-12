import Block from './Block';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './FeedbackResul';

import { useState } from 'react';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = property => {
    if (!countTotalFeedback()) {
      return 0;
    }

    const result = (good / countTotalFeedback()) * 100;
    return Number(Math.round(result));
  };

  const leaveFeedback = propertyName => {
    switch (propertyName) {
      case 'good':
        return setGood(prev => prev + 1);
      case 'neutral':
        return setNeutral(prev => prev + 1);
      case 'bad':
        return setBad(prev => prev + 1);
      default:
        return;
    }
  };

  return (
    <div>
      <Block title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          leaveFeedback={leaveFeedback}
        />
      </Block>
      <Block title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercent={countPositiveFeedbackPercentage()}
        />
      </Block>
    </div>
  );
}
