import { ACTION_CONT } from "../constants/actions";

let nextId = 0;
const todos = (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    case ACTION_CONT.GET_TODOS_LIST:
      return { todos: [], loading: true };
    case ACTION_CONT.RECEIVED_TODOS_LIST:
      return { todos: action.json, loading: false };
    case ACTION_CONT.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextId++,
            title: action.title,
            description: action.description,
            completed: false,
          },
        ],
      };
    // return [
    //   ...state,
    //   {
    //     id: nextId++,
    //     title: action.title,
    //     description: action.description,
    //     completed: false,
    //   },
    // ];
    case ACTION_CONT.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case ACTION_CONT.EDIT_TODO:
      // return {...state , todos :[ ...state.todos , {
      // }]}
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? {
                id: action.id,
                title: action.title,
                description: action.description,
                completed: todo.completed,
              }
            : todo
        ),
      };
    case ACTION_CONT.DELETE_TODO:
      console.log("state");
      console.log(state);
      console.log("state");
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case ACTION_CONT.GET_TODO:
      return state;
    default:
      return state;
  }
};

export default todos;
