import { ACTION_CONT } from "../constants/actions";
let nextId = 0;
export const getTodos = () => ({
  type: ACTION_CONT.GET_TODOS_LIST,
});
export const addTodo = (title, description) => ({
  type: ACTION_CONT.ADD_TODO,
  id: nextId++,
  title,
  description,
});

export const toggleTodo = (id) => ({
  type: ACTION_CONT.TOGGLE_TODO,
  id,
});
export const deleteTodo = (id) => ({
  type: ACTION_CONT.DELETE_TODO,
  id,
});
export const editTodo = (id, title, description) => ({
  type: ACTION_CONT.EDIT_TODO,
  id,
  title,
  description,
});
export const selectTodo = (id) => ({
  type: ACTION_CONT.GET_TODO,
  id,
});
