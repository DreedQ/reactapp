import React from 'react';
import { IStyle } from './interfaces';
import styled from 'styled-components';

const WrapperStyled = styled.div<IStyle>`
    max-width: ${props => props.maxWidth || '1040px'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    margin: ${props => props.margin || '0 auto'};
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'space-between'};
    align-items: ${props => props.align || 'auto'};
    flex-wrap: ${props => props.flexWrap || null};
    background: ${props => props.background || null};
    border: ${props => props.border || null};
`;

const Wrapper: React.FC<IStyle> = props => {
    return <WrapperStyled {...props} />;
};

export default Wrapper;
