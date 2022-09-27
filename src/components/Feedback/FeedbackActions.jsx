import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ leaveFeedback }) {
  return (
    <>
      <button onClick={() => leaveFeedback('good')}>Good</button>
      <button onClick={() => leaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => leaveFeedback('bad')}>Bad</button>
    </>
  );
}
FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func,
};
