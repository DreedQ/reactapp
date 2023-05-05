import React from 'react';
import { IStyle } from './interfaces';
import styled from 'styled-components';
import Wrapper from './Wrapper';

interface IProps extends IStyle {
    percents: number;
    maxSec: number;
    nowSec: number;
    sec: number;
    min: number;
}

const ProgressBarStyled = styled.div`
    display: flex;
    width: 72%;
    height: 50px;
    background: #4caf50;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;
`;
const ProgressMaskStyled = styled.div<IStyle>`
    position: absolute;
    width: ${props => props.width || '100%'};
    height: 50px;
    background: red;
    opacity: 0.7;
`;
const Progress: React.FC<IProps> = React.memo(props => {
    return (
        <Wrapper width='800px' {...props}>
            <Wrapper direction='column' width='100%' align='center' margin='32px'>
                <p>Начало отсчёта {props.maxSec} секунд</p>
                <p>Осталось {props.nowSec} секунд</p>
                <p>
                    До истечения времени {props.min} минут и {props.sec} секунд.
                </p>
                <ProgressBarStyled>
                    <p>Прогресс {props.percents} %</p>
                    <ProgressMaskStyled {...props} width={props.percents.toString() + '%'} />
                </ProgressBarStyled>
            </Wrapper>
        </Wrapper>
    );
});

export default Progress;
