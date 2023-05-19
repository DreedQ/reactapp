import React, { FC, memo, useState } from 'react';
import Button from '../Button';
import Wrapper from '../Wrapper';
import { nanoid } from '@reduxjs/toolkit';

interface PropsAddTodo {
    addNewTodoItem: (id: string, title: string, completed: boolean) => void;
}

const AddTodo: FC<PropsAddTodo> = ({ addNewTodoItem }) => {
    const [newItem, setNewItem] = useState({ id: '', title: '', completed: false });

    const handleDddNewItem = () => {
        if (!newItem.title) return;
        addNewTodoItem(newItem.id, newItem.title, newItem.completed);
        setNewItem({ id: '', title: '', completed: false });
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem({ ...newItem, title: e.target.value, id: nanoid() });
    };

    return (
        <Wrapper margin='12px' align='center'>
            <input value={newItem.title} onChange={inputHandler} />
            <Button font_size='1rem' padding='auto' width='65px' height='35px' onClick={handleDddNewItem}>
                Add
            </Button>
        </Wrapper>
    );
};

export default memo(AddTodo);
