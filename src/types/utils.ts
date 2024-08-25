// src/types/utils.ts

import { TodoItem } from './interfaces';

export function isTodoItem(obj: any): obj is TodoItem {
    return (
        typeof obj === 'object' &&
        typeof obj.id === 'number' &&
        typeof obj.title === 'string' &&
        typeof obj.completed === 'boolean'
    );
}

export function hasDueDate(todo: TodoItem): todo is TodoItem & { dueDate: Date } {
    return todo.dueDate instanceof Date;
}

export function hasPriority(todo: TodoItem): todo is TodoItem & { priority: 'high' | 'medium' | 'low' } {
    return typeof todo.priority === 'string' && ['high', 'medium', 'low'].includes(todo.priority);
}