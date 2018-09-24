import React from 'react';
import PropTypes from 'prop-types';
import CustomBoard from './CustomBoard';
import StackGrid from 'react-stack-grid';
import sizeMe from 'react-sizeme';

class BoardList extends React.Component { 
  constructor(props){
    super(props);
  }
  render() {
    const {
      size: {
        width
      }
    } = this.props;
    return (
      <StackGrid columnWidth={width < 768 ? '100%' : 300} gutterWidth={10} gutterHeight={10}>
        {this.props.data.map(custom => (
          <CustomBoard author={custom.author} title={custom.title} image={custom.image} paste={custom.paste} key={custom._id} id={custom._id} timestamp={custom.updatedAt}>
          </CustomBoard>
          ))}
      </StackGrid>
    )
  }
}

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

export default sizeMe()(BoardList);