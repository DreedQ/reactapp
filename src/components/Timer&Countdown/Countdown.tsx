import React, { useState, useEffect, useCallback } from 'react';
import Wrapper from '../Wrapper';
import Button from '../Button';
import { IStyle } from '../interfaces';
import Progress from './Progress';
import { InputNumber } from './InputNumber';
import InputSlider from './InputSlider';
import audioFile from '../../assets/audio/alarm.wav';
import CountCell from './CountCell';

const Countdown: React.FC<IStyle> = React.memo(() => {
    const [count, setCount] = useState({ sec: 0, min: 0, all: 0 });
    const [status, setStatus] = useState(false);
    const [progress, setProgress] = useState({ percents: 0, maxSec: 0, nowSec: 0 });

    const handChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement> | React.WheelEvent<HTMLInputElement>) => {
            if (+e.currentTarget.value > 720 && e.currentTarget.name === 'min') return;
            if (e.currentTarget.name === 'all') {
                setCount({
                    ...count,
                    min: Math.floor(+e.currentTarget.value / 60),
                    sec: +e.currentTarget.value - Math.floor(+e.currentTarget.value / 60) * 60,
                    all: +e.currentTarget.value,
                });
            } else if (e.currentTarget.name === 'sec') {
                setCount({
                    ...count,
                    sec: +e.currentTarget.value,
                    all: count.min * 60 + count.sec,
                });
                if (count.sec >= 59) {
                    setCount({ ...count, sec: 0, min: count.min + 1 });
                }
            } else if (count.min === 60) {
                setCount({
                    min: +e.currentTarget.value,
                    all: +e.currentTarget.value * 60,
                    sec: 0,
                });
            } else {
                setCount({
                    ...count,
                    min: +e.currentTarget.value,
                    all: +e.currentTarget.value * 60,
                });
            }
        },
        [count]
    );

    const handStart = () => {
        if (!status && progress.maxSec === 0) {
            setStatus(true);
            setProgress({
                ...progress,
                maxSec: count.min * 60 + count.sec,
                nowSec: count.min * 60 + count.sec,
                percents: +((progress.nowSec / progress.maxSec) * 100).toFixed(1),
            });
        }
        if (!status) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    };

    const handClear = () => {
        if (!status) {
            setCount({ min: 0, sec: 0, all: 0 });
            setProgress({ percents: 0, maxSec: 0, nowSec: 0 });
        } else setStatus(false);
    };

    const sound = () => {
        let audio = new Audio(audioFile);
        audio.preload = 'auto';
        audio.play();
    };

    let countDown = useCallback(() => {
        if (count.min === 0 && count.sec === 0) {
            setStatus(false);
            sound();
        } else if (count.sec <= 0) {
            setCount({ min: --count.min, sec: 59, all: count.all - 1 });
        } else {
            setCount({ ...count, sec: --count.sec, all: count.all - 1 });
        }
        setProgress({
            ...progress,
            nowSec: count.min * 60 + count.sec,
            percents: +(((count.min * 60 + count.sec) / progress.maxSec) * 100).toFixed(1),
        });
    }, [count, progress]);

    useEffect(() => {
        if (status) {
            let interval = setInterval(countDown, 1000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [count, countDown, progress, status]);

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
            <Progress {...progress} {...count} />
            <Wrapper width='550px' direction='column'>
                <Wrapper>
                    <CountCell>
                        <InputNumber
                            type='number'
                            name='min'
                            placeholder='Min'
                            onWheel={handChange}
                            onChange={handChange}
                            value={count.min}
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
                            value={count.sec}
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
                        value={count.all}
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
});

export default Countdown;
