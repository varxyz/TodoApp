import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';

class AddTodo extends React.Component {
  addTodo = (e) =>{
    e.preventDefault();
    const {dispatch} = this.props;
    let todoText = this.refs.todoText.value;
    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(addTodo(todoText))
      // this.props.handleSubmit(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className='form-check'>
        <form onSubmit={this.addTodo}>
          <input className='form-control' type="text" ref='todoText' placeholder='Add todo:'/>
        </form>
      </div>
    )
  }
}
module.exports = connect()(AddTodo);
