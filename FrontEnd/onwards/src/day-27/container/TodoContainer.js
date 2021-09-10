import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo} from "../redux"
import { deleteTodo } from "../redux"
import {loadTodo} from "../redux"
function TodoContainer() {
    const [todoinput, settodoinput] = useState("")
    const todolist = useSelector(state => state )
    const dispatch = useDispatch()
   
    const TodoList = () => {
        const list = todolist.map((todo,index) =>(
            <div key={index}>
                <div>{todo}</div>
                <button onClick={()=>{dispatch(deleteTodo(index)) }}>DELETE</button>
            </div>
            )
        )
        return (
            <div> { list }</div>
            )
        
    }
    return (
        <div>
            <input type="text" value={todoinput} onChange={(e) => settodoinput(e.target.value)} />
            <button onClick={() => {
                dispatch(addTodo(todoinput))
                settodoinput("")
                // e.target.value=""
            }}>ADD TODO</button>
            <button onClick={()=>loadTodo()}>LOAD TODO</button>
            <TodoList/>
        </div>
    )
}

export default TodoContainer
