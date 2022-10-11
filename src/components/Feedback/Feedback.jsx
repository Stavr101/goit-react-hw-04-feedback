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
    const total = countTotalFeedback();

    if (!countTotalFeedback()) {
      return 0;
    }
    const value = property;
    const result = (value / total) * 100;
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

  // const positivePercent = countPositiveFeedbackPercentage(good);
  // const neutralFeedback = countPositiveFeedbackPercentage('neutral');
  // const badFeedback = countPositiveFeedbackPercentage('bad');

  return (
    <div>
      <Block title="Please leave feedback">
        <FeedbackOptions
          options={(good, neutral, bad)}
          leaveFeedback={leaveFeedback}
        />
      </Block>
      <Block title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercent={countPositiveFeedbackPercentage}
        />
      </Block>
    </div>
  );
}

// export default class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// countTotalFeedback() {
//   const { good, neutral, bad } = this.state;

//   return good + neutral + bad;
// }

// countPositiveFeedbackPercentage() {
//   const total = this.countTotalFeedback();

//   if (!total) {
//     return 0;
//   }
//   const value = this.state.good;
//   const result = (value / total) * 100;
//   return Number(Math.round(result));
// }

// leaveFeedback = propertyName => {
//   this.setState(prevState => {
//     const value = prevState[propertyName];

//     return { [propertyName]: value + 1 };
//   });
// };

// render() {
// const { good, neutral, bad } = this.state;
// const total = this.countTotalFeedback();
// const positivePercent = this.countPositiveFeedbackPercentage();

// return (
//   <div>
//     <Block title="Please leave feedback">
//       <FeedbackOptions
//         options={this.state}
//         leaveFeedback={this.leaveFeedback}
//       />
//     </Block>
//     <Block title="Statistics">
//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={total}
//         positivePercent={positivePercent}
//       />
//     </Block>
//   </div>
// );
//   }
// }
