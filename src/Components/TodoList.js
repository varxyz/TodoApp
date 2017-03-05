import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import todoAPI from './todoAPI';

class TodoList extends React.Component {
  render() {
    const {todos, showCompleted, searchText} = this.props;
    let renderTodos = () => {
      if(todos.length===0) {
          return (
            <h4 className='container__message' style={{fontWeight:'700', textAlign:'center'}}>Nothing to do</h4>
            )
        }
      return todoAPI.filterTodos(todos, showCompleted, searchText).map((item) => {
        return <Todo key={item.id} {...item}
         />
      })
    }
    return (
      <div className='tlist'>{renderTodos()}</div>
      )
  }
}

export default connect(
    (state) => {
      return state;
    }
  )(TodoList);
