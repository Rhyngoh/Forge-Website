import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './css/styles.css';
import './css/animate.min.css';

const styles = {
    root: {
        flex: 1,
        flexGrow: 1
    }
};
class App extends React.Component {
    render(){
        return(
            <div className={styles.root}>
                <Navbar />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;