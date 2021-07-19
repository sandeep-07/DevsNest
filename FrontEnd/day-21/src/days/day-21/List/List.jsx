import React, { useState } from 'react'


const List = () => {
    const [todo,setTodo]=useState([])
    const [text,setText]=useState("")
    const [cal, setCal] = useState("")

    const [editmode,setEditMode]=useState(true)
    const [editData, setEditData] = useState({
        
    })
    
    const handleDelete = (index) => {
        const newList = todo.filter((el, i) => i !== index)
        setTodo(newList)
        console.log("I ran")
        
    }
    const handleEdit = (index) => {
        setEditMode(true)

    }

    
    return (
        <div>
            <input type="text" value={text} onChange={(event) => {
                console.log(text)
                setText(event.target.value)
            } }/>
            <input type="number" value={cal} onChange={(event) => {
                setCal(event.target.value)
                console.log(cal)
            }} />
            <button onClick={(e) => {
                setTodo([...todo, text])
                e.preventDefault()
                console.log(todo)
            }}>Submit</button>


            {
                todo.map((el, index) => {
                    return (

                        (editmode ? 
                            <input  /> : <div key={index}>
                            {el}
                            <button onClick={()=>handleDelete(index)}>Del me</button>
                            <button onClick={()=>handleEdit(index)}>Edit me me</button>
                        </div>)
                        
                    )
                })
            }
        </div>
    )
}

export default List