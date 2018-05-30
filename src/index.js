import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
//material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
//font-awesome
import 'font-awesome/css/font-awesome.min.css'

const WithRouter = () => <BrowserRouter><MuiThemeProvider><App /></MuiThemeProvider></BrowserRouter>

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
injectTapEventPlugin();