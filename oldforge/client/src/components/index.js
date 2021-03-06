import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#333745'
		},
		secondary: {
			main: '#C7EFCF'
		}
	}
});
ReactDOM.render((
	<BrowserRouter>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</BrowserRouter>
	), document.getElementById('root'));