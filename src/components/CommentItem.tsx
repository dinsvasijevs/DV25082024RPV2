import React from 'react';
import { Comment } from '../types';

interface Props {
    comment: Comment;
}

const CommentItem: React.FC<Props> = ({ comment }) => {
    return (
        <li className="mb-2">
            <p>{comment.text}</p>
        </li>
    );
};

export default CommentItem;