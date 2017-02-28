import React from 'react';
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const {todos} = this.props;
    let renderTodos = () => {
      return todos.map((item) => {
        if(todos.length===0) {
          return (
            <p className='container__message'>Nothing to do</p>
            )
        }
        return <Todo key={item.id} {...item} onClick={this.props.onClick} onToggle={this.props.onToggle} />
      })
    }
    return (
      <div className='tlist'>{renderTodos()}</div>
      )
  }
}
