import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';

const styles = {
  card: {
    width: 300
  },
  media: {
    height: 200
  }
}
function CustomBoard(props) {
  const { classes } = props;
  return(
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="headline" component="h3">
        {props.title}
      </Typography>
      <Typography color="textSecondary">
        {props.author} | <span className="time">{moment(props.timestamp).fromNow()}</span>
      </Typography>
    </CardContent>
    <CardMedia className={classes.media} image="https://picsum.photos/200/200?random" title={props.title}/>
  </Card>
  )
}

CustomBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default withStyles(styles)(CustomBoard);

//<CardMedia className={classes.media} image={props.image ? props.image : 'https://picsum.photos?random'} title={props.image}/>