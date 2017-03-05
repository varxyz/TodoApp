import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {configure} from './store/configureStore';
import {addTodos} from './actions/index';
import TodoAPI from './Components/todoAPI';

let store = configure();

store.subscribe(() => {
  console.log('new State', store.getState());
  TodoAPI.setTodos(store.getState().todos)
});
let todosDef = TodoAPI.getTodos();
store.dispatch(addTodos(todosDef));

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const App2 = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <App2 />
  </Provider>,
  document.getElementById('root')
);
