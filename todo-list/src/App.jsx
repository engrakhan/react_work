import { useState } from 'react'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'

function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center" >
            <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Todo List</h1>
                <AddTodoForm addTodo={addTodo} />
                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </div>
        </div>
    )
}

export default App