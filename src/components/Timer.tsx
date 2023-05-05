import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import { IStyle } from './interfaces';

const CountCell = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    background: #06a90c91;
    border: 1px solid #fff;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    box-shadow: -3px -3px 19px 12px #c38787a1 inset;
`;

const Timer: React.FC<IStyle> = React.memo(() => {
    const [count, setCount] = useState({ minutes: 0, seconds: 0, milliseconds: 0 });
    const [status, setStatus] = useState(false);

    let changeTime = useCallback(() => {
        if (count.seconds >= 59) {
            setCount({ minutes: ++count.minutes, seconds: 0, milliseconds: 0 });
        } else if (count.milliseconds >= 99) {
            setCount({ ...count, seconds: ++count.seconds, milliseconds: 0 });
        } else {
            setCount({ ...count, milliseconds: ++count.milliseconds });
        }
    }, [count]);

    useEffect(() => {
        if (status) {
            let intervalID = setTimeout(() => changeTime(), 10);
            return () => clearInterval(intervalID);
        }
    }, [changeTime, count, status]);

    const handStartStopTimer = () => {
        if (!status) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    };

    const handClearTimer = () => {
        if (!status) {
            setStatus(false);
            setCount({ minutes: 0, seconds: 0, milliseconds: 0 });
        } else {
            setStatus(false);
        }
    };

    return (
        <Wrapper
            background='#dae7f7'
            maxWidth='100%'
            width='100%'
            height='100vh'
            direction='column'
            justify='center'
            align='center'
        >
            <h1>Timer</h1>
            <Wrapper width='550px' height='515px' justify='center' align='center'>
                <CountCell>{count.minutes} </CountCell>
                <CountCell>{count.seconds} </CountCell>
                <CountCell>{count.milliseconds}</CountCell>
            </Wrapper>
            <Wrapper justify='space-around'>
                <Button onClick={handStartStopTimer} width='250px'>
                    Старт/Стоп/Пауза
                </Button>
                <Button onClick={handClearTimer} width='250px'>
                    Сброс
                </Button>
            </Wrapper>
        </Wrapper>
    );
});

export default Timer;
