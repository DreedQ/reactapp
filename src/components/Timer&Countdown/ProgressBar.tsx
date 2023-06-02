import React from 'react';
import { IStyle } from '.././interfaces';
import styled from 'styled-components';

interface ProgressBarProp extends IStyle {
    count: number;
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

const ProgressBar: React.FC<ProgressBarProp> = props => {
    return (
        <ProgressBarStyled>
            <p>Прогресс {props.count} %</p>
        </ProgressBarStyled>
    );
};

export default ProgressBar;
