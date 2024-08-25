import React, { useState } from 'react';
import { useTodoContext } from '../contexts/TodoContext';
import { Comment } from '../types';

interface Props {
    todoId: number;
    setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const AddCommentForm: React.FC<Props> = ({ todoId, setComments }) => {
    const [text, setText] = useState('');
    const { addComment } = useTodoContext();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            try {
                const newComment = await addComment({ todoId, text });
                if (newComment) {
                    setComments(prev => [...prev, newComment]);
                    setText('');
                }
            } catch (error) {
                console.error("Failed to add comment:", error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a comment"
                className="px-2 py-1 border rounded mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
                Add Comment
            </button>
        </form>
    );
};

export default AddCommentForm;