import { FunctionComponent, ReactNode, useCallback } from 'react';
import Wrapper from './Wrapper';
import { ReactComponent as CloseIcon } from '../assets/icons/cross.svg';
import styled from 'styled-components';
import { IStyle } from './interfaces';

interface ModalProps {
    children?: ReactNode;
    visible: boolean;
    onClose: () => void;
}

const ModalStyled = styled.div<IStyle>`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #808080db;
    justify-content: center;
    align-items: center;
    display: ${props => props.display || 'none'};
    /* visibility: ${props => props.visibility || 'visible'}; */
`;

const Modal: FunctionComponent<ModalProps> = ({ visible, onClose, children }) => {
    const toggle = useCallback(
        (e: React.MouseEvent) => {
            onClose();
        },
        [onClose]
    );

    return (
        <ModalStyled onClick={onClose} display={visible ? 'block' : 'none'}>
            {/* // <ModalStyled onClick={onClose} visibility={visible ? 'visible' : 'hidden'}> */}
            <Wrapper
                onClick={e => e.stopPropagation()}
                width='800px'
                height='550px'
                background='pink'
                justify='flex-start'
                align='center'
                direction='column'
            >
                <Wrapper justify='space-between' direction='row' width='100%'>
                    <Wrapper width='100%' justify='flex-end'>
                        <h4>Title</h4>
                    </Wrapper>
                    <Wrapper width='100%' align='center' justify='flex-end'>
                        <Wrapper
                            padding='5px'
                            border='solid 1px red'
                            margin='5px'
                            justify='flex-end'
                            box_shadow='inset 0 0 3px 0px'
                        >
                            <CloseIcon onClick={toggle} fill='red' />
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                {children}
            </Wrapper>
        </ModalStyled>
    );
};

export default Modal;
