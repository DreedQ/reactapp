import React, { useState, useEffect, useCallback } from 'react';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import Button from './Button';
import { IStyle } from './interfaces';
import Progress from './Progress';
import { InputNumber } from './InputNumber';
import InputSlider from './InputSlider';
import audioFile from '../assets/audio/alarm.wav';

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
    padding: 0 12px;
    box-shadow: -3px -3px 19px 12px #c38787a1 inset;
`;

const Countdown: React.FC<IStyle> = React.memo(() => {
    const [count, setCount] = useState({ min: 0, sec: 0 });
    const [status, setStatus] = useState(false);
    const [progress, setProgress] = useState({ percents: 0, maxSec: 0, nowSec: 0 });

    const handChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement> | React.WheelEvent<HTMLInputElement>) => {
            if (+e.currentTarget.value > 720 && e.currentTarget.name === 'min') return;
            if (+e.currentTarget.value > 60 && e.currentTarget.name === 'sec') return;
            setCount({ ...count, [e.currentTarget.name]: +e.currentTarget.value });
        },
        [count]
    );

    useEffect(() => {
        !status &&
            setProgress({
                maxSec: count.min * 60 + count.sec,
                nowSec: count.min * 60 + count.sec,
                percents: !isNaN(+((progress.nowSec / progress.maxSec) * 100).toFixed(1))
                    ? +((progress.nowSec / progress.maxSec) * 100).toFixed(1)
                    : 0,
            });
    }, [count.min, count.sec, progress.maxSec, progress.nowSec, status]);

    const handStart = () => {
        if (!status) {
            setStatus(true);
            setProgress({
                ...progress,
                maxSec: count.min * 60 + count.sec,
                percents: +((progress.nowSec / progress.maxSec) * 100).toFixed(1),
            });
        } else {
            setStatus(false);
        }
    };

    const handClear = () => {
        if (!status) {
            setCount({ min: 0, sec: 0 });
            setProgress({ percents: 0, maxSec: 0, nowSec: 0 });
        } else setStatus(false);
    };

    const sound = () => {
        let audio = new Audio(audioFile);
        audio.preload = 'auto';
        // audio.src = '../assets/audio/1.mid';
        // audio.autoplay = true;
        audio.play();
        // console.log('SSSS');
    };

    let countDown = useCallback(() => {
        if (count.min === 0 && count.sec === 0) {
            setStatus(false);
            sound();
        } else if (count.sec <= 0) {
            setCount({ min: --count.min, sec: 59 });
        } else {
            setCount({ ...count, sec: --count.sec });
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
                            onWheel={e => handChange(e)}
                            onChange={e => handChange(e)}
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
                            onWheel={e => handChange(e)}
                            onChange={e => handChange(e)}
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
                        name='min'
                        onChange={e => handChange(e)}
                        value={count.min}
                        min={0}
                        max={60}
                        status={status}
                    />
                    <InputSlider
                        type='range'
                        name='sec'
                        onChange={e => handChange(e)}
                        value={count.sec}
                        min={0}
                        max={60}
                        step={15}
                        status={status}
                    />
                </Wrapper>
            </Wrapper>
            <Wrapper justify='space-around'>
                <Button onClick={handStart} width='250px'>
                    Старт/Пауза
                </Button>
                <Button onClick={handClear} width='250px'>
                    Сброс
                </Button>
            </Wrapper>
        </Wrapper>
    );
});

export default Countdown;
