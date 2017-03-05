import React, { Component } from 'react';
import logo from './logo.svg';
import logord from './logord.svg';
import './App.css';
import SearchForm from './Components/SearchForm';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import uuid from 'node-uuid';
import AppBar from 'material-ui/AppBar';
import {Card} from 'material-ui/Card';
import todoAPI from './Components/todoAPI';

//menu bar
const _AppBar = () => (
  <AppBar
    title="React | Redux Todo App"
    style={{backgroundColor:'#C6007E', fontFamily:'whitney htf, arial, sans-serif'}}
  />
);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: todoAPI.getTodos()
    }
  }

  componentDidUpdate() {
    todoAPI.setTodos(this.state.todos);
  }

  handleAdd = (todoText) => {
    let todos = this.state.todos;
    let allTexts = todos.map(item => item.text)
    let allTexts2 = allTexts.includes(todoText);
    if(!allTexts2) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: uuid(),
            text: todoText,
            completed: false
          }
        ]
      })
    } else {
      confirm('Todo already in the list. Add anyway?')
        this.setState({
        todos: [
          ...this.state.todos,
          {
            id: uuid(),
            text: todoText,
            completed: false
          }
        ]
      })
    }
  }
  render() {
    return (
      <div>
        <div className='logos'>
          <_AppBar titleStyle={{display:'inline-block'}} />
        </div>
        <div className='logos'>
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logord} className="App-logo" alt="logo-redux"/>
        </div>
        <Card className='container'>
          <AddTodo />
          <TodoList className='tlist'/>
          <SearchForm className='form'/>
        </Card>
      </div>
    );
  }
}

export default App;
