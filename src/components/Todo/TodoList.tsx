import React, { memo, useCallback, useEffect, useState } from 'react';
import Wrapper from '../Wrapper';
import { ITodoModel } from '../../models/todo.model';
import Todo from './Todo';
import TodoCounter from './TodoCounter';
import AddTodo from './AddTodo';
import { IStyle } from '../interfaces';
import Button from '../Button';
import { data } from '../../data/todoBase';

interface IUtility {
    countItems: number;
    filter: null | boolean;
}

const TodoList: React.FC<IStyle> = () => {
    const [utilityValues, setUtilityValues] = useState<IUtility>({ countItems: 0, filter: null });
    const [dataItems, setDataItems] = useState<Array<ITodoModel>>([{ id: '', title: '', completed: false }]);
    const [filteredItems, setFilteredItems] = useState(dataItems);
    useEffect(() => {
        setDataItems(JSON.parse(data));
        setFilteredItems(JSON.parse(data));
    }, []);

    useEffect(() => {
        if (utilityValues.filter === null) {
            setFilteredItems([...dataItems]);
        } else setFilteredItems([...dataItems.filter(el => el.completed === utilityValues.filter)]);
    }, [dataItems, utilityValues.filter]);

    useEffect(() => {
        setUtilityValues({ ...utilityValues, countItems: filteredItems.length });
    }, [filteredItems.length]);

    const handleDeleteItem = useCallback(
        (id: string) => {
            setDataItems([...dataItems.filter(item => item.id !== id)]);
        },
        [dataItems]
    );

    const addNewTodoItem = (id: string, title: string, completed: boolean) => {
        setDataItems([...dataItems, { id: id, completed: completed, title: title }]);
    };

    const handleRedux = useCallback(
        (item: ITodoModel) => {
            setDataItems([...dataItems.filter(el => item.id !== el.id), item]);
        },
        [dataItems]
    );

    return (
        <Wrapper
            background='#dae7f7'
            maxWidth='100%'
            width='100%'
            height='100%'
            direction='column'
            justify='center'
            align='center'
        >
            {' '}
            <h1>Todo</h1>
            <AddTodo addNewTodoItem={addNewTodoItem} />
            <Wrapper align='center' border='solid 1px black' border_radius='20px' padding='10px'>
                {' '}
                <h2>Filters:</h2>
                <Button
                    onClick={() => setUtilityValues({ ...utilityValues, filter: null })}
                    font_size='.8rem'
                    box_shadow={utilityValues.filter === null ? 'rgb(8 103 92) 0px 0px 14px 6px' : ''}
                >
                    Show All Tasks
                </Button>
                <Button
                    onClick={() => setUtilityValues({ ...utilityValues, filter: false })}
                    font_size='.8rem'
                    box_shadow={utilityValues.filter === false ? 'rgb(8 103 92) 0px 0px 14px 6px' : ''}
                >
                    Show Active Tasks
                </Button>
                <Button
                    onClick={() => setUtilityValues({ ...utilityValues, filter: true })}
                    font_size='.8rem'
                    box_shadow={utilityValues.filter === true ? 'rgb(8 103 92) 0px 0px 14px 6px' : ''}
                >
                    Show completed Tasks
                </Button>
            </Wrapper>
            <TodoCounter countItems={filteredItems.length} />
            <Wrapper direction='column'>
                {filteredItems
                    .sort((a, b) => a.id.localeCompare(b.id))
                    .map(el => (
                        <Todo key={el.id} handleDeleteItem={handleDeleteItem} handleRedux={handleRedux} item={el} />
                    ))}
            </Wrapper>
        </Wrapper>
    );
};

export default memo(TodoList);
