import React from 'react';
import { IStyle } from '.././interfaces';
import styled from 'styled-components';

interface ProgressMaskProps extends IStyle {
    count: number;
}

const ProgressMaskStyled = styled.div<IStyle>`
    position: absolute;
    width: ${props => props.width || '100%'};
    height: 50px;
    background: red;
    opacity: 0.7;
`;

const ProgressMask: React.FC<ProgressMaskProps> = props => {
    return <ProgressMaskStyled {...props} width={props.toString() + '%'} />;
};

export default ProgressMask;
