import React from 'react';

export default function FeedbackOptions({ leaveFeedback }) {
  return (
    <>
      <button onClick={() => leaveFeedback('good')}>Good</button>
      <button onClick={() => leaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => leaveFeedback('bad')}>Bad</button>
    </>
  );
}
