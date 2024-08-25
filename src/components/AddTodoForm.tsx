import React, { useState } from 'react';
import { useTodoContext } from '../contexts/TodoContext';

const AddTodoForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const { addTodo } = useTodoContext();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            addTodo({ title, content: '', completed: false });
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
                className="px-2 py-1 border rounded mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
                Add Todo
            </button>
        </form>
    );
};

export default AddTodoForm;