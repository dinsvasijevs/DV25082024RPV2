import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTodoContext } from '../contexts/TodoContext';
import { Todo, Comment } from '../types';
import CommentList from '../components/CommentList';
import AddCommentForm from '../components/AddCommentForm';
import * as api from '../utils/api';

const TaskDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { updateTodo } = useTodoContext();
    const [todo, setTodo] = useState<Todo | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        if (id) {
            api.fetchTodo(parseInt(id)).then(setTodo);
            api.fetchComments(parseInt(id)).then(setComments);
        }
    }, [id]);

    if (!todo) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{todo.title}</h1>
            <p>{todo.content}</p>
            <button
                onClick={() => updateTodo(todo.id, { completed: !todo.completed })}
                className={`mt-2 px-3 py-1 rounded ${todo.completed ? 'bg-green-500' : 'bg-yellow-500'} text-white`}
            >
                {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <h2 className="text-xl font-bold mt-4 mb-2">Comments</h2>
            <CommentList comments={comments} />
            <AddCommentForm todoId={todo.id} setComments={setComments} />
        </div>
    );
};

export default TaskDetailPage;