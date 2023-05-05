import React from 'react';
import Timer from './components/Timer';
import Wrapper from './components/Wrapper';
import Countdown from './components/Countdown';

function App() {
    return (
        <Wrapper maxWidth='100%'>
            <Timer />
            <Countdown />
        </Wrapper>
    );
}

export default App;
