import React from 'react';

export default class AddTodo extends React.Component {
  addTodo = (e) =>{
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.handleSubmit(todoText);
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
