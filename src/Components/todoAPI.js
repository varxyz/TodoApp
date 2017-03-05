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
  },

  filterTodos: (todos, showCompleted, searchText) => {
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
}
