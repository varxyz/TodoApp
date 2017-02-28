
module.exports = {
  getTodos: () => {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];
    try {
      todos = JSON.parse(stringTodos)
    } catch (e) {

    }
    return Array.isArray(todos) ? todos : [];
  },
  setTodos: (todos) => {
    if(Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  }
}
