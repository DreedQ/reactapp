import { ChangeEventHandler, FormEventHandler, FunctionComponent, ReactNode, useState } from 'react';

interface InputProps {
    value?: string;
    defaultValue?: string;
    handleChange?: ChangeEventHandler<HTMLInputElement>;
    innerClassName?: string;
    children?: ReactNode;
}

const Input: FunctionComponent<InputProps> = ({ value, defaultValue, handleChange, innerClassName, ...rest }) => {
    const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');

    return <input value={innerValue} onChange={handleChange} className={innerClassName} {...rest} />;
};

export default Input;
