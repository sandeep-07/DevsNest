import React,{useState} from 'react';
import Todo from "./Todo"
// const { Button } = window['MaterialUI'];
const Todos = () => {
    
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")
    
    return (
        <div>
            {/* <Button>ss</Button> */}
        <input
                type="text"
                value={todo}
            onChange={(event) => setTodo(event.target.value)}                
            />
            <button onClick={() => {
                console.log(todo)
                setTodos([...todos,todo])
                setTodo([])
            }}>Submit</button>
            {
                todos.map((todo,idx) => {
                    return <Todo key={idx} todo={todo} idx={idx} todos={todos} func={setTodos}/>
                })
            }

        {/* <Button>
  Primary
</Button> */}
    </div>
        
    )
}

export default Todos