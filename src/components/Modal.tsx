import { FunctionComponent, ReactNode, useState } from 'react';
import Wrapper from './Wrapper';
import { ReactComponent as CloseIcon } from '../assets/icons/cross.svg';
import styled from 'styled-components';
import { IStyle } from './interfaces';

interface ModalProps {
    children?: ReactNode;
    visible: boolean;
    toggle: () => void;
}

const ModalStyled = styled.div<IStyle>`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #808080db;
    display: ${props => props.display || 'none'};
    /* visibility: ${props => props.visibility || 'visible'}; */
`;
const Modal: FunctionComponent<ModalProps> = ({ visible, toggle, children }) => {
    const onClose = () => {
        toggle();
    };

    return (
        <ModalStyled onClick={onClose} display={visible ? 'block' : 'none'}>
            <Wrapper>
                <Wrapper justify='space-between' direction='row'>
                    <h4>Title</h4>
                    <CloseIcon onClick={onClose} />
                </Wrapper>
                {children}
            </Wrapper>
        </ModalStyled>
    );
};

export default Modal;
