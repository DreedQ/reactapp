import { ChangeEventHandler, FunctionComponent, ReactNode, memo, useState } from 'react';

interface InputProps {
    value?: string;
    defaultValue?: string;
    sendInner: ChangeEventHandler<HTMLInputElement>;
    innerClassName?: string;
    children?: ReactNode;
}

const Input: FunctionComponent<InputProps> = ({ value, defaultValue, innerClassName, sendInner, ...rest }) => {
    const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value);
        sendInner(e);
    };

    return <input value={innerValue} onChange={handleChange} className={innerClassName} {...rest} />;
};

export default memo(Input);
