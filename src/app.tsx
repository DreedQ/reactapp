import React from 'react';
import Timer from './components/Timer';
import Countdown from './components/Countdown';
import { Route, Routes } from 'react-router-dom';
import Root from './routes/Root';
import TodoList from './components/TodoList';

function App() {
    return (
        <>
            <Root />
            <Routes>
                <Route path='/timer' element={<Timer />} />
                <Route path='/countdown' element={<Countdown />} />
                <Route path='/todo' element={<TodoList />} />
            </Routes>
        </>
    );
}

export default App;
