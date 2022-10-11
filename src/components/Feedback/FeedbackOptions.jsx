import React from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, leaveFeedback }) {
  const names = Object.keys(options);
  // console.log(options);

  const elements = names.map((name, index) => {
    console.log();

    return (
      <button key={index} onClick={() => leaveFeedback(name)}>
        {name}
      </button>
    );
  });
  return elements;
}

//   // <>
//   //   <button onClick={() => leaveFeedback('good')}>Good</button>
//   //   <button onClick={() => leaveFeedback('neutral')}>Neutral</button>
//   //   <button onClick={() => leaveFeedback('bad')}>Bad</button>
//   // </>
// );
// }
FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
};
