import React from 'react';
import Timer from './components/Timer&Countdown/Timer';
import Countdown from './components/Timer&Countdown/Countdown';
import { Route, Routes } from 'react-router-dom';
import Root from './routes/Root';
import TodoList from './components/Todo/TodoList';
import ProductListContainer from './components/product/card/list/Product-list.container';

function App() {
    return (
        <>
            <Root />
            <Routes>
                <Route path='/timer' element={<Timer />} />
                <Route path='/countdown' element={<Countdown />} />
                <Route path='/todo' element={<TodoList />} />
                <Route path='/productList' element={<ProductListContainer />} />
            </Routes>
        </>
    );
}

export default App;
