import React, { useState } from 'react';
import Button from './Button';
import Wrapper from './Wrapper';

const AddTodo = props => {
    const [newItem, setNewItem] = useState({ id: '', title: '', completed: false });

    const handleDddNewItem = () => {
        if (!newItem.title) return;
        props.addNewTodoItem(newItem.id, newItem.title, newItem.completed);
        setNewItem({ id: '', title: '', completed: false });
    };

    return (
        <Wrapper margin='12px' align='center'>
            <input
                value={newItem.title}
                onChange={e => setNewItem({ ...newItem, title: e.target.value, id: new Date().toString() })}
            />
            <Button font_size='1rem' padding='auto' width='65px' height='35px' onClick={handleDddNewItem}>
                Add
            </Button>
        </Wrapper>
    );
};

export default AddTodo;
