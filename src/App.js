import React from 'react';
import Navbar from './Navbar';
import Main from './Main';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    }
};
class App extends React.Component {
    render(){
        return(
            <div className={styles.root}>
                <Navbar />
                <Main />
            </div>
        )
    }
}

export default App;