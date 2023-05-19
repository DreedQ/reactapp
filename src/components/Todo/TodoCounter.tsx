import React from 'react';

interface ICountTodos {
    countItems: number;
}

const TodoCounter: React.FC<ICountTodos> = ({ countItems }) => {
    return (
        <div>
            <h3>Todos: {countItems} </h3>
        </div>
    );
};

export default TodoCounter;
