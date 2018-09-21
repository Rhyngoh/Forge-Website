import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Callback from './components/Callback';

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
        console.log(this.props);
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