import {ADD_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO} from './types';

export const addTodo = (value) => {
  return {
    type: ADD_TODO,
    payload: value
  }
}

export const removeTodo = (index) => {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}

export const toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    payload: index
  }
}

export const searchTodo = (searchStr) => {
  return {
    type: SEARCH_TODO,
    payload: searchStr
  }
}