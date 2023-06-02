import React from 'react';
import { IStyle } from '.././interfaces';
import Wrapper from '.././Wrapper';
import ProgressBar from './ProgressBar';
import ProgressMask from './ProgressMask';

interface ProgressProps extends IStyle {
    count: number;
    initStart: number;
}

const Progress: React.FC<ProgressProps> = props => {
    return (
        <Wrapper width='800px' {...props}>
            <Wrapper direction='column' width='100%' align='center' margin='32px'>
                <p>Осталось {props.count} секунд</p>
                <p>
                    До истечения времени {Math.floor(props.count / 60)} минут и {props.count % 60} секунд.
                </p>
                <ProgressBar count={props.initStart ? Math.floor((props.count / props.initStart) * 100) : 0}>
                    <ProgressMask count={props.initStart ? Math.floor((props.count / props.initStart) * 100) : 0} />
                </ProgressBar>
            </Wrapper>
        </Wrapper>
    );
};

export default Progress;
