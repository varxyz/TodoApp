import { createStore, combineReducers, compose } from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from '../reducers/index'

export const configure = () => {
  const reducers = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });
  let store = createStore(reducers, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
