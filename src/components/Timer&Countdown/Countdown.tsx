import React, { useState, useEffect, useCallback } from 'react';
import Wrapper from '../Wrapper';
import Button from '../Button';
import { IStyle } from '../interfaces';
import Progress from './Progress';
import { InputNumber } from './InputNumber';
import InputSlider from './InputSlider';
import audioFile from '../../assets/audio/alarm.wav';
import CountCell from './CountCell';

const Countdown: React.FC<IStyle> = () => {
    const [count, setCount] = useState(0);
    const [initStart, setInitStart] = useState(0);
    const [status, setStatus] = useState(false);

    const handChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement> | React.WheelEvent<HTMLInputElement>) => {
            if (+e.currentTarget.value > 720 && e.currentTarget.name === 'min') return;
            if (e.currentTarget.name === 'sec') {
                setCount(count - (count % 60) + +e.currentTarget.value);
                if (+e.currentTarget.value === 0) {
                    console.log('WARNING');
                    setCount(count - 2);
                }
            } else if (e.currentTarget.name === 'min') {
                setCount((count % 60) + +e.currentTarget.value * 60);
            } else setCount(+e.currentTarget.value);
        },
        [count]
    );

    const handStart = () => {
        if (!status) {
            setInitStart(count);
            setStatus(true);
        } else {
            setStatus(false);
        }
    };

    const handClear = () => {
        if (!status) {
            setCount(0);
            setInitStart(0);
        } else setStatus(false);
    };

    const sound = () => {
        let audio = new Audio(audioFile);
        audio.preload = 'auto';
        audio.play();
    };

    let countDown = useCallback(() => {
        if (count === 0) {
            setStatus(false);
            sound();
        } else {
            setCount(count - 1);
        }
    }, [count]);

    useEffect(() => {
        if (status) {
            let interval = setInterval(countDown, 1000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [count, countDown, status]);

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
            <h1>Countdown</h1>
            <Progress count={count} initStart={initStart} />
            <Wrapper width='550px' direction='column'>
                <Wrapper>
                    <CountCell>
                        <InputNumber
                            type='number'
                            name='min'
                            placeholder='Min'
                            onWheel={handChange}
                            onChange={handChange}
                            value={Math.floor(count / 60)}
                            min={0}
                            max={60}
                            status={status}
                        />
                        <p>Минуты</p>
                    </CountCell>
                    <CountCell>
                        <InputNumber
                            type='number'
                            name='sec'
                            placeholder='Sec'
                            onWheel={handChange}
                            onChange={handChange}
                            value={count % 60}
                            min={0}
                            max={60}
                            status={status}
                        />
                        <p>Секунды</p>
                    </CountCell>
                </Wrapper>

                <Wrapper margin='12px'>
                    <InputSlider
                        type='range'
                        name='all'
                        onChange={handChange}
                        onWheel={handChange}
                        value={count}
                        min={0}
                        max={3600}
                        step={15}
                        status={status}
                    />
                </Wrapper>
            </Wrapper>
            <Wrapper justify='space-around'>
                <Button onClick={handStart} width='250px'>
                    {!status ? 'Запустить' : 'Пауза'}
                </Button>
                <Button onClick={handClear} width='250px'>
                    Сброс
                </Button>
            </Wrapper>
        </Wrapper>
    );
};

export default Countdown;
