import { FunctionComponent } from 'react';

interface ButtonOuterProps {
    innerClassName?: string;
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
    children: React.ReactNode;
}

const ButtonOuter: FunctionComponent<ButtonOuterProps> = ({ innerClassName, onClick, ...rest }) => {
    return <button onClick={onClick} className={innerClassName} {...rest} />;
};

export default ButtonOuter;
