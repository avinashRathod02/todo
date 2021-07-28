import { ACTION_CONT } from "../constants/actions";
let nextId = 0;
export const addTodo = (titke, desc) => ({
  type: ACTION_CONT.ADD_TODO,
  id: nextId++,
  title,
  desc,
});

export const toggleTodo = (id) => ({
  type: ACTION_CONT.TOGGLE_TODO,
  id,
});
export const deleteTodo = (id) => ({
  type: ACTION_CONT.DELETE_TODO,
  id,
});
