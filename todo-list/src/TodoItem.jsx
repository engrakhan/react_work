import React from 'react'

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <>
            <li className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <div className="flex items-center flex-grow">
                    <input type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="mr-2 form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                    </span>
                </div>
                <button onClick={() => deleteTodo(todo.id)}
                    className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                >Delete</button>
            </li>
        </>
    )
}

export default TodoItem