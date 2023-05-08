import React from 'react';
import styled from 'styled-components';
import { IStyle } from './interfaces';

interface IButton extends IStyle {
    onClick: React.MouseEventHandler<HTMLElement>;
}
const ButtonStyled = styled.button<IStyle>`
    display: ${props => props.display || 'inline-block'};
    align-items: ${props => props.align || 'unset'};
    justify-content: ${props => props.justify || 'unset'};
    border-radius: 10px;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    width: ${props => props?.width || '100%'};
    height: ${props => props.height || '60px'};
    margin: ${props => props.margin || '17px'};
    padding: ${props => props.padding || '17px'};
    font-size: ${props => props.font_size || '20px'};
    box-shadow: ${props => props.box_shadow || '-4px 3px 12px 0px #464545;'};
    /* box-shadow: -4px 3px 12px 0px #464545; */
    background-color: grey;
    border: green;
    &:hover,
    &:active {
        opacity: 0.7;
        color: #000000;
        box-shadow: -4px 3px 12px 0px #f91c10;
    }
    &:disabled {
        opacity: 0.4;
        cursor: auto;
    }
`;

const Button: React.FC<IButton> = props => {
    return <ButtonStyled {...props} />;
};

export default Button;
