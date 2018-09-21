import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core/';
import Clipboard from 'react-clipboard.js';

const styles = {
  card: {
    width: 300
  },
  media: {
    height: 200,
    padding: '16px',
    display: 'block',
    margin: 'auto'
  }
}
function CustomBoard(props){
  const { classes } = props;
  console.log(props);
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
    <img className={classes.media} src={props.image} title={props.title}/>
    <CardActions>
      <Clipboard data-clipboard-text={props.paste}>Copy to Clipboard</Clipboard>
    </CardActions>
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
//<CardMedia className={classes.media} image={props.image} title={props.title}/>