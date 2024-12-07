import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, TextField, Checkbox } from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(todo.task);

    const handleUpdate = () => {
        updateTodo({
            ...todo,
            task: newTask
        });
        setIsEditing(false);
    };

    return (
        <ListItem>
            <Checkbox
                checked={todo.completed}
                onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
            />
            {isEditing ? (
                <TextField
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onBlur={handleUpdate}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleUpdate();
                    }}
                />
            ) : (
                <ListItemText
                    primary={todo.task}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                />
            )}
            <IconButton onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? <Save /> : <Edit />}
            </IconButton>
            <IconButton onClick={() => deleteTodo(todo.id)}>
                <Delete />
            </IconButton>
        </ListItem>
    );
};

export default TodoItem;
