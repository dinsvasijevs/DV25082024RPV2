import React, { createContext, useContext, useState, useEffect } from 'react';
import { Todo, Comment } from '../types';
import * as api from '../utils/api';

interface TodoContextType {
    todos: Todo[];
    addTodo: (todo: Omit<Todo, 'id'>) => Promise<void>;
    updateTodo: (id: number, todo: Partial<Todo>) => Promise<void>;
    deleteTodo: (id: number) => Promise<void>;
    addComment: (comment: Omit<Comment, 'id'>) => Promise<Comment>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
};

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        api.fetchTodos().then(setTodos);
    }, []);

    const addTodo = async (todo: Omit<Todo, 'id'>) => {
        const newTodo = await api.createTodo(todo);
        setTodos([...todos, newTodo]);
    };

    const updateTodo = async (id: number, todo: Partial<Todo>) => {
        const updatedTodo = await api.updateTodo(id, todo);
        setTodos(todos.map(t => t.id === id ? updatedTodo : t));
    };

    const deleteTodo = async (id: number) => {
        await api.deleteTodo(id);
        setTodos(todos.filter(t => t.id !== id));
    };

    const addComment = async (comment: Omit<Comment, 'id'>): Promise<Comment> => {
        return await api.createComment(comment);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, addComment }}>
            {children}
        </TodoContext.Provider>
    );
};