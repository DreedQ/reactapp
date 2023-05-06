import React, { useState } from 'react';
import { IStyle } from './interfaces';
import Button from './Button';
import { ITodoModel } from '../models/todo.model';
import Wrapper from './Wrapper';
import styled from 'styled-components';

interface ITodo extends IStyle {
    handleDeleteItem: (id: string) => void;
    handleRedux: (el: ITodoModel) => void;
    item: ITodoModel;
}

const LabelStyled = styled.label<IStyle>`
    :hover {
        border: solid 1px #fff;
        border-radius: 10px;
    }
`;
export const Todo: React.FC<ITodo> = ({ item, handleDeleteItem, handleRedux }) => {
    const [editMode, setEditMode] = useState(false);
    const [newItem, setNewItem] = useState(item);

    const reduxItem = () => {
        if (item.title === newItem.title) return;
        handleRedux(newItem);
        setEditMode(false);
    };

    const checkItem = () => {
        setNewItem({ ...item, completed: (item.completed = !item.completed) });
        handleRedux(newItem);
    };

    return (
        <Wrapper
            direction='column'
            border='solid 2px #000'
            margin='12px'
            border_radius='15px'
            width='500px'
            background='grey'
            align='center'
        >
            <Wrapper>
                <h4>{item.title}</h4>
            </Wrapper>
            <Wrapper>
                {!editMode && (
                    <Wrapper margin='12px' justify='flex-start'>
                        <LabelStyled>
                            Status <input id='check' type='checkbox' onChange={checkItem} checked={item.completed} />
                            {item.completed ? <p>Done!</p> : <p>To be Done(</p>}
                        </LabelStyled>
                    </Wrapper>
                )}
                {!editMode && (
                    <Wrapper>
                        <Button
                            width='55px'
                            height='25px'
                            font_size='0.7rem'
                            padding='6px'
                            onClick={() => setEditMode(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            width='55px'
                            height='25px'
                            font_size='0.7rem'
                            padding='6px'
                            onClick={() => handleDeleteItem(item.id)}
                        >
                            Delete
                        </Button>
                    </Wrapper>
                )}
                {editMode && (
                    <Wrapper>
                        <input type='text' onChange={e => setNewItem({ ...item, title: e.target.value })} />
                        <Wrapper>
                            <Button onClick={reduxItem}>Save</Button>
                            <Button onClick={() => setEditMode(false)}>Cancel</Button>
                        </Wrapper>
                    </Wrapper>
                )}
            </Wrapper>
        </Wrapper>
    );
};
