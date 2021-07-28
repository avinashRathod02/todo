import { ACTION_CONT } from "../constants/actions";

let nextId = 0;
const todos = (state = [], action) => {
  switch (action.type) {
    case ACTION_CONT.ADD_TODO:
      return [
        ...state,
        {
          id: nextId++,
          title: action.title,
          desc: action.desc,
          completed: false,
        },
      ];
    case ACTION_CONT.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case ACTION_CONT.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
