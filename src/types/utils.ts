import { TodoItem } from './interfaces';

export type TodoSummary = Pick<TodoItem, 'id' | 'title'>;
export type PartialTodo = Partial<TodoItem>;
export type ReadonlyTodo = Readonly<TodoItem>;
export type ReadonlyTodoArray = readonly TodoItem[];
export type NonNullableTodoDueDate = NonNullable<TodoItem['id']>;
export type TodoItems = Record<string, TodoItem>;