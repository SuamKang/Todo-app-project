import initialTodo from './initialTodo'
import {READ, CREATE, REMOVE, TOGGLE, MODIFY} from '../actions/index'




const todoReducer = (state = initialTodo, action) => {
    switch (action.type) {
        // case READ :
        //     return action.payload.data;
        case CREATE :
            return Object.assign({}, state, {
                todos : [...state.todos, action.payload],
            });
        case REMOVE :
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            });
        case TOGGLE :
            return Object.assign({}, state, {
                todos : state.todos.map((todo) => todo.id === action.payload.id ? {...todo, done : action.payload.done} : todo)
            });
        case MODIFY :
            return Object.assign({}, state, {
                todos : state.todos.map((todo) => todo.id === action.payload.id ? {...todo, text : action.payload.text} : todo)
            });
        default:
            return state;
    }
};

export default todoReducer;