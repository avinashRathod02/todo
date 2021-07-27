let nextId = 0
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: nextId++,
                    title: action.title,
                    desc: action.desc,
                    completed: false
                }
            ]

        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed } :
                    todo)
        default:
            return state
    }
}

export default todos