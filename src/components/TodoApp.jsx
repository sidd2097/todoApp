import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    // Retrieve todos from localStorage when component mounts
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    // Update localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const updateTodo = (updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                Todo App
            </Typography>
            <Paper style={{ padding: 16 }}>
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            </Paper>
        </Container>
    );
};

export default TodoApp;
