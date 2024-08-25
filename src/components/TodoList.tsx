import React from 'react';
import { useTodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const { todos } = useTodoContext();

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;