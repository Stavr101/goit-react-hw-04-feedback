import React from 'react';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercent,
}) {
  return (
    <>
      {' '}
      {!total ? (
        <div>There is no feedback</div>
      ) : (
        <div>
          <p>Good: {good} </p>
          <p>Neutral: {neutral} </p>
          <p>Bad: {bad} </p>
          <p>Total: {total} </p>
          <p>Positive feedback: {positivePercent}% </p>
        </div>
      )}
    </>
  );
}
