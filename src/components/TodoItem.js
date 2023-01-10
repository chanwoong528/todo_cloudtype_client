import React from 'react'

const TodoItem = ({ content }) => {
    return (
        <div>
            <p>{content}</p>
            <button>X</button>
        </div>
    )
}

export default TodoItem