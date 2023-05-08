import React, { memo, useCallback, useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { ITodoModel } from '../models/todo.model';
import { Todo } from './Todo';
import TodoCounter from './TodoCounter';
import AddTodo from './AddTodo';
import { IStyle } from './interfaces';
import Button from './Button';
import { util } from 'prettier';

interface IUtility {
    countItems: number;
    filter: null | boolean;
}
const data = `
[
    {
        "id": "51c1c4f1-03bf-48bf-9705-9dc97ab61a76",
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "id": "62aabce1-8f84-4684-90b9-2b2310cf726a",
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "id": "402ee516-6c72-4d16-a9a8-322069f5cf6e",
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "id": "3b720eaf-163a-41c8-bc5e-b47f2370cd0c",
        "title": "et porro tempora",
        "completed": true
    },
    {
        "id": "3ab57b63-e789-4211-a507-6b89501bc39a",
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "id": "09d15f18-14ea-4fd3-b75b-e57777c25b3c",
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "id": "46f5bdd5-dc22-441e-b78b-e812d817cfde",
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "id": "bce9f1e0-4383-40a6-9a10-2f59d9aa1465",
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "id": "05da3453-89e2-4d44-8912-5b727218808c",
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "id": "c7034df3-eb7b-4cad-a323-3f5c6ceb9283",
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    }
]
`;

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
    }, [dataItems, filteredItems.length, utilityValues]);

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
            <TodoCounter countItems={utilityValues.countItems} />
            <Wrapper direction='column'>
                {filteredItems.map(el => (
                    <Todo key={el.id} handleDeleteItem={handleDeleteItem} handleRedux={handleRedux} item={el} />
                ))}
            </Wrapper>
        </Wrapper>
    );
};

export default memo(TodoList);
