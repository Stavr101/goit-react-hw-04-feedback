import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercent,
}) {
  return (
    <>
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

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercent: PropTypes.number,
};
