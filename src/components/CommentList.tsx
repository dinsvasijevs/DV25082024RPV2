import React from 'react';
import { Comment } from '../types';
import CommentItem from './CommentItem';

interface Props {
    comments: Comment[];
}

const CommentList: React.FC<Props> = ({ comments }) => {
    return (
        <ul className="mt-4">
            {comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </ul>
    );
};

export default CommentList;