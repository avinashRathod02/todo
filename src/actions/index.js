import { ACTION_CONT } from "../constants/actions";
let nextId = 0;
export const searchInTodo = (searchText) => ({
  type: ACTION_CONT.SEARCH_IN_TODO,
  payload: {
    searchText,
  },
});
export const getTodos = () => ({
  type: ACTION_CONT.GET_TODOS_LIST,
  payload: {
    searchText: "",
  },
});
export const addTodo = (title, description) => ({
  type: ACTION_CONT.ADD_TODO,
  payload: {
    id: nextId++,
    title,
    description,
  },
});

export const toggleTodo = (id) => ({
  type: ACTION_CONT.TOGGLE_TODO,
  payload: {
    id,
  },
});
export const deleteTodo = (id) => ({
  type: ACTION_CONT.DELETE_TODO,
  payload: {
    id,
  },
});
export const editTodo = (id, title, description) => ({
  type: ACTION_CONT.EDIT_TODO,
  payload: {
    id,
    title,
    description,
  },
});
export const selectTodo = (id) => ({
  type: ACTION_CONT.GET_TODO,
  payload: {
    id,
  },
});
