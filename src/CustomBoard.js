import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

const CustomBoard = props => (

  <div>
    <h3>{props.author}</h3>
    <p>{props.title}</p>
    <p>{props.image}</p>
  </div>
);

CustomBoard.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default CustomBoard;