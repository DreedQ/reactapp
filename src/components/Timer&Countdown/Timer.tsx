import React, { useState, useEffect, useCallback } from 'react';
import Button from '.././Button';
import Wrapper from '.././Wrapper';
import { IStyle } from '.././interfaces';
import CountCell from './CountCell';

const Timer: React.FC<IStyle> = React.memo(() => {
    const [count, setCount] = useState(0);
    const [timerID, setTimerID] = useState<NodeJS.Timer | number>(0);
    const [status, setStatus] = useState(false);
    const [startTime, setStartTime] = useState(new Date().getTime());
    const [temporaryTime, setTemporaryTime] = useState(0);

    let changeTime = useCallback(() => {
        setCount(new Date().getTime() - startTime + temporaryTime);
    }, [startTime, temporaryTime]);

    useEffect(() => {
        if (status) {
            let intervalID = setTimeout(() => changeTime(), 10);
            setTimerID(intervalID);
            return () => clearInterval(intervalID);
        }
    }, [changeTime, count, status]);

    const handStartStopTimer = () => {
        if (!status) {
            setStatus(true);
            setStartTime(new Date().getTime());
            clearInterval(timerID);
        } else {
            setStatus(false);
            setTemporaryTime(count);
        }
    };

    const handClearTimer = () => {
        if (!status) {
            setStatus(false);
            setCount(0);
            setTemporaryTime(0);
        } else {
            clearInterval(timerID);
            setStatus(false);
            setTemporaryTime(count);
        }
    };

    const formatTime = useCallback((time: number) => {
        let date = new Date(time);
        let ms = date.getMilliseconds().toString().slice(0, 2).padStart(2, '0');
        let s = date.getSeconds().toString().padStart(2, '0');
        let m = date.getMinutes().toString().padStart(2, '0');
        return `${m}:${s}:${ms}`;
    }, []);

    return (
        <Wrapper
            background='#dae7f7'
            maxWidth='100%'
            width='100%'
            direction='column'
            justify='center'
            align='center'
            height='100vh'
        >
            <h1>Timer</h1>
            <Wrapper width='550px' height='515px' justify='center' align='center'>
                <CountCell>{formatTime(count)}</CountCell>
            </Wrapper>
            <Wrapper justify='space-around'>
                <Button onClick={handStartStopTimer} width='250px'>
                    {!status && count === 0 ? 'Запустить' : status ? 'Пауза' : 'Вoзобновить'}
                </Button>
                <Button onClick={handClearTimer} width='250px'>
                    Сброс
                </Button>
            </Wrapper>
        </Wrapper>
    );
});

export default Timer;
