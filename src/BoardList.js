import React from 'react';
import PropTypes from 'prop-types';
import CustomBoard from './CustomBoard';

const BoardList = (props) => {
  console.log(props.data);
  const customNodes = props.data.map(custom => (
    <CustomBoard author={custom.author} title={custom.title} image={custom.image} key={custom._id} id={custom._id} timestamp={custom.updatedAt}>
    </CustomBoard>
  ));
  return (
    <div>
      { customNodes }
    </div>
  );
};

BoardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string
  })),
};

BoardList.defaultProps = {
  data: [],
};

export default BoardList;