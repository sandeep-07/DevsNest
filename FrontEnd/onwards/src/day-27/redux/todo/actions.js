import { ADD_TODO } from "./actionType";
import { DELETE_TODO } from "./actionType";
import { LOAD_TODO } from "./actionType";
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload:todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload:id
    }
}

export const loadTodo = () => {
    console.log("I ran")
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
            .then((todos) => {
            console.log("22")
            console.log(todos)
            
            return dispatch({
                type: LOAD_TODO,
                payload:todos
            })
        })
        .catch(err=>console.log(err))
    }
}