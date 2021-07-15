import React, { useState } from 'react';

const Todo = ({ idx, todo,todos,func,cal}) => {
    // console.log(idx)
    const { Button } = window['MaterialUI'];
    return (
        <div className="todo" key={idx} style={{margin:"5px"}}
            onClick={() => {
                const newTodo = todos.filter((el, i) => i !== idx)
                func(newTodo)
            }}>
            
            <span style={{ marginBottom: "15px" }}> {todo}</span>
            <div> Eating this will give you {
                cal
            }
            calories <button class="btn"> Eat😋 </button> < /div >
            
        </div>
    )
}
export default Todo;