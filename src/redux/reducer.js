import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

const initialState = {
  totalTodo: 1,
  todos: [{ title: 'read book', done: false }]
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        totalTodo: state.totalTodo + 1,
        todos: [...state.todos, { title: action.payload, done: false }]
      }

    case REMOVE_TODO:
      return {
        totalTodo: state.totalTodo - 1,
        todos: [
          ...state.todos.slice(0, action.payload),
          ...state.todos.slice(action.payload + 1)
        ]
      }

    case TOGGLE_TODO:
      const toggleTask = state.todos[action.payload];
      const updateStatusTask = !toggleTask.done;

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload),
          {
            title: toggleTask.title,
            done: updateStatusTask
          },
          ...state.todos.slice(action.payload + 1)
        ]
      }

    default:
      return state;
  }
}

export default reducer;