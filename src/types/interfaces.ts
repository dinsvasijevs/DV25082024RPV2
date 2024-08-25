// src/types/interfaces.ts

export interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
    dueDate?: Date | null;
    priority?: 'high' | 'medium' | 'low';
}

export type TodoSummary = Pick<TodoItem, 'id' | 'title'>;

export type PartialTodoItem = Partial<TodoItem>;

export type ReadonlyTodoItem = Readonly<TodoItem>;

export type ReadonlyTodoItems = readonly TodoItem[];

export type DueDate = NonNullable<TodoItem['dueDate']>;

export type TodoItems = Record<string, TodoItem>;