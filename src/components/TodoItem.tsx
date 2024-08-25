import React from 'react';
import { Link } from 'react-router-dom';
import { Todo } from '../types';
import { useTodoContext } from '../contexts/TodoContext';

interface Props {
    todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
    const { updateTodo, deleteTodo } = useTodoContext();

    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
            <div>
                <h3 className="text-lg font-semibold">{todo.title}</h3>
                <p className="text-gray-600">{todo.content}</p>
            </div>
            <div>
                <button
                    onClick={() => updateTodo(todo.id, { completed: !todo.completed })}
                    className={`mr-2 px-3 py-1 rounded ${todo.completed ? 'bg-green-500' : 'bg-yellow-500'} text-white`}
                >
                    {todo.completed ? 'Completed' : 'Mark Complete'}
                </button>
                <Link to={`/task/${todo.id}`} className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">
                    View
                </Link>
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;