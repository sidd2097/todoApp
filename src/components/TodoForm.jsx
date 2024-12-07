import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTodo({
            id: Date.now(),
            task,
            completed: false
        });
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="New Todo"
                variant="outlined"
                fullWidth
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: 8 }}>
                Add
            </Button>
        </form>
    );
};

export default TodoForm;
