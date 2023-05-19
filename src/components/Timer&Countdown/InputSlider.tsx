import styled from 'styled-components';
import { IStyle } from '.././interfaces';
import React, { useEffect, useRef } from 'react';

const InputCell = styled.input`
    width: 100%;
    height: 75px;
    font-size: 2rem;
    text-align: center;
    background: #fff0;
    border: none;
`;
interface IInput extends IStyle {
    type?: string;
    name?: string;
    placeholder?: string;
    value?: number;
    onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
    step?: number;
    status?: boolean;
}
const InputSlider: React.FC<IInput> = React.memo(props => {
    const refInp = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (props.status) {
            refInp.current?.setAttribute('disabled', 'disabled');
        } else {
            refInp.current?.removeAttribute('disabled');
        }
    }, [props.status]);

    return (
        <InputCell
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onWheel={props.onWheel}
            onChange={props.onChange}
            value={props.value}
            min={props.min}
            max={props.max}
            step={props.step}
            ref={refInp}
        />
    );
});

export default InputSlider;
