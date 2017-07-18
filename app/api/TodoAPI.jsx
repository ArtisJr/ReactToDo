var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringsTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringsTodos);
    } catch (e) {

    }
    
    return $.isArray(todos) ? todos : [];
  }
};