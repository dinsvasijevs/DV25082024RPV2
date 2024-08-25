interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

interface RootState {
    todoItems: TodoItem[];
}