import React, { useState } from 'react';

const Todo = ({ idx, todo,todos,func }) => {
    // console.log(idx)
    const { Button } = window['MaterialUI'];
    return (
        <div key={idx}
            onClick={() => {
                const newTodo = todos.filter((el, i) => i !== idx)
                func(newTodo)
            }}>{todo}
            
        </div>
    )
}
export default Todo;