import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const CountCellStyled = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    background: #06a90c91;
    border: 1px solid #fff;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    box-shadow: -3px -3px 19px 12px #c38787a1 inset;
`;
interface CountCellProps {
    children: ReactNode;
}

const CountCell: FunctionComponent<CountCellProps> = ({ children }) => {
    return <CountCellStyled>{children}</CountCellStyled>;
};

export default CountCell;
