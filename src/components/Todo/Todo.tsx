import React, { useState } from 'react';
import { IStyle } from '../interfaces';
import Button from '../Button';
import { ITodoModel } from '../../models/todo.model';
import Wrapper from '../Wrapper';
import styled from 'styled-components';

interface ITodo extends IStyle {
    handleDeleteItem: (id: string) => void;
    handleRedux: (el: ITodoModel) => void;
    item: ITodoModel;
}

const LabelStyled = styled.label<IStyle>`
    box-shadow: ${props => props.box_shadow || '-4px 3px 12px 0px #068b3e;'};
    border-radius: 15px;
    padding: 10px;
    :hover {
        border: solid 1px #fff;
        border-radius: 10px;
    }
`;

export const Todo: React.FC<ITodo> = ({ item, handleDeleteItem, handleRedux }) => {
    const [editMode, setEditMode] = useState(false);
    const [newItem, setNewItem] = useState(item);

    const reduxItem = () => {
        if (item.title === newItem.title && item.completed !== newItem.completed) return;
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
                <Wrapper margin='12px' justify='flex-start'>
                    <LabelStyled box_shadow={item.completed ? '' : '-4px 3px 12px 0px #f00e0e;'}>
                        {editMode ? (
                            <input id='check' type='checkbox' onChange={checkItem} checked={newItem.completed} />
                        ) : (
                            <input
                                id='check'
                                type='checkbox'
                                onChange={checkItem}
                                checked={newItem.completed}
                                disabled
                            />
                        )}
                        Status {item.completed ? <p>Done!</p> : <p>To be Done</p>}
                    </LabelStyled>
                </Wrapper>

                {!editMode ? (
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
                ) : (
                    <Wrapper direction='column'>
                        <input
                            type='text'
                            value={newItem.title}
                            onChange={e => setNewItem({ ...item, title: e.target.value })}
                        />
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

export default Todo;
