import { FC } from 'react';
import styled from 'styled-components';
import { IStyle } from './interfaces';

const CreateBtnStyled = styled.button<IStyle>`
    border-radius: 50%;
    border: solid 1px grey;
    position: fixed;
    bottom: 55px;
    right: 55px;
    width: 65px;
    height: 65px;
    font-size: 55px;
    background: #08ac9a;
    color: #e06237;
    opacity: 0.8;
    :hover {
        opacity: 1;
        box-shadow: #e06237 0 0 12px 6px;
    }
    :active {
        background: red;
    }
`;

interface CreateButtonProps {
    onClick: React.MouseEventHandler<HTMLElement>;
}

const CreateButton: FC<CreateButtonProps> = ({ onClick }) => {
    return <CreateBtnStyled onClick={onClick}>+</CreateBtnStyled>;
};

export default CreateButton;
