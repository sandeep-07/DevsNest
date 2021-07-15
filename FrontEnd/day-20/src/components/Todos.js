import React,{useState} from 'react';
import Todo from "./Todo"
import "./Todos.css"
// const { Button } = window['MaterialUI'];
const Todos = () => {
    
    const [todos, setTodos] = useState([{ food: "Pizza", cal: 300 }, { food:"coke",cal:100},{food:"Fried Rice",cal:50},{food:"Momo",cal:200}])
    const [todo, setTodo] = useState("")
    
    return (
        <div className="todos">
            {/* <Button>ss</Button> */}
        {/* <input
                type="text"
                value={todo}
            onChange={(event) => setTodo(event.target.value)}                
            /> */}
            {/* <button onClick={() => {
                console.log(todo)
                setTodos([...todos,todo])
                setTodo([])
            }}>Submit</button> */}
            {
                todos.map((todo,idx) => {
                    return <Todo key={idx} todo={todo.food} idx={idx} todos={todos} func={setTodos} cal={todo.cal}/>
                })
            }

        {/* <Button>
  Primary
</Button> */}
    </div>
        
    )
}

export default Todos