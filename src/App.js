import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './Components/SearchForm';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import uuid from 'node-uuid';
import AppBar from 'material-ui/AppBar';
import {Card} from 'material-ui/Card';
import todoAPI from './Components/todoAPI';


const AppBarExampleIcon = () => (
  <AppBar
    title="React | Redux Todo App"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
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

   handleClick = (id) => {
        let todos = this.state.todos;
        let index = todos.map((el) => el.id).indexOf(id);
        todos.splice(index, 1);
        this.setState({
          todos: todos
        })
  }
  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText
    })
  }
  filterTodos = (todos, showCompleted, searchText) => {
    let filteredTodos = todos;
    //filter by showCompleted
    filteredTodos = filteredTodos.filter((item) => {
      return !item.completed || showCompleted;
    });
    //filter by searchText
    filteredTodos = filteredTodos.filter((item) => {
      const text = item.text.toLowerCase();
      searchText = searchText.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    })
    //sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0
      }
    })
    return filteredTodos;
  }
  handleToggle =(id)=> {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id)
        todo.completed = !todo.completed
      return todo;
    });
    this.setState({
      todos: updatedTodos
    })
  }
  render() {
    const {todos, showCompleted, searchText} = this.state;
    let filteredTodos = this.filterTodos(todos, showCompleted, searchText);
    let count =this.state.todos.length;
    let f2 = this.state.todos.filter((item) => {
      return item.completed === false
    })
    return (
      <div>
        <AppBarExampleIcon />
        <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Card className='container'>
          <AddTodo handleSubmit={this.handleAdd}/>
          <TodoList className='tlist' todos={filteredTodos} onClick={this.handleClick} onToggle={this.handleToggle}/>
          <SearchForm count={count} todos={f2} showCompleted={showCompleted} onSearch={this.handleSearch} className='form'/>
        </Card>
      </div>
    );
  }
}

export default App;
