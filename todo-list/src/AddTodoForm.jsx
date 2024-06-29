import { useState } from 'react'

function AddTodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex">
                <input type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Add new todo'
                    className='flex-1 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    style={{ height: '42px' }}
                />
                <button
                    type='submit'
                    className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition duration-300 whitespace-nowrap"
                    style={{ height: '42px' }}
                >Add</button>
            </div>
        </form>
    )
}

export default AddTodoForm;