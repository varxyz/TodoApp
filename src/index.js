import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const App2 = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App2 />,
  document.getElementById('root')
);
