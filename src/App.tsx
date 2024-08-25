import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoProvider } from './contexts/TodoContext';
import HomePage from './pages/HomePage';
import TaskDetailPage from './pages/TaskDetailPage';

const App: React.FC = () => {
    return (
        <TodoProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/task/:id" element={<TaskDetailPage />} />
                </Routes>
            </Router>
        </TodoProvider>
    );
};

export default App;