import { FunctionComponent, ReactNode } from 'react';

interface ButtonOuterProps {
    innerClassName?: string;
    onClick: React.MouseEventHandler<HTMLElement>;
    children: React.ReactNode;
}

const ButtonOuter: FunctionComponent<ButtonOuterProps> = ({ innerClassName, ...rest }) => {
    return <button className={innerClassName} {...rest} />;
};

export default ButtonOuter;
