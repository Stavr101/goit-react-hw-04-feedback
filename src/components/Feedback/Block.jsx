import PropTypes from 'prop-types';

const Block = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Block;

Block.propTypes = {
  title: PropTypes.string,
};
