import { ACTION_CONT } from "../constants/actions";

let nextId = 0;
const todos = (state = { todos: [], loading: false }, action) => {
  switch (action.type) {
    case ACTION_CONT.GET_TODOS_LIST:
      return { todos: [], loading: true };
    case ACTION_CONT.RECEIVED_TODOS_LIST:
      return { todos: action.payload.json, loading: false };
    case ACTION_CONT.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextId++,
            title: action.payload.title,
            description: action.payload.description,
            completed: false,
          },
        ],
      };
    case ACTION_CONT.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ACTION_CONT.EDIT_TODO:
      // return {...state , todos :[ ...state.todos , {
      // }]}
      return state;
    case ACTION_CONT.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case ACTION_CONT.GET_TODO:
      return state;
    case ACTION_CONT.SEARCH_IN_TODO:
      return { todos: [], loading: true };
    default:
      return state;
  }
};

export default todos;
