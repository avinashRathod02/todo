import { ADD_TODO, TOGGLE_TODO } from './constant'

let nextId = 0
export const addTodo = (titke,desc) => ({
    type: ADD_TODO,
    id: nextId++,
    title,
    desc
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})