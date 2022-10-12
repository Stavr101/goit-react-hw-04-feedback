import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, leaveFeedback }) {
  const elements = options.map((name, index) => {
    console.log();

    return (
      <button key={index} onClick={() => leaveFeedback(name)}>
        {name}
      </button>
    );
  });
  return elements;
}

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
};
