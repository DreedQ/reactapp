import { ITodoModel } from '../models/todo.model';

export const writeToLocalStore = (data: Array<ITodoModel>) => {
    let value = JSON.stringify(data);
    localStorage.setItem('todoList', value);
};

export const readFromLocalStore = () => {
    return localStorage.getItem('todo');
};
