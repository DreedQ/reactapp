import { FC, useState } from 'react';
import Button from './Button';
import Wrapper from './Wrapper';

interface DescriptionProps {
    text: string;
    maxLength?: number;
}

const maxLengthConstant = 150;

const Description: FC<DescriptionProps> = ({ text, maxLength = maxLengthConstant }) => {
    const [showText, setShowText] = useState(false);

    return (
        <>
            {text?.length <= maxLength ? (
                <p>{text}</p>
            ) : (
                <Wrapper direction='column'>
                    {showText ? <p>{text}</p> : <p>{text?.split('').slice(0, maxLength).join('')} ...</p>}

                    {showText ? (
                        <Button
                            onClick={() => setShowText(false)}
                            font_size='1rem'
                            padding='0'
                            margin='7px 0 12px'
                            height='30px'
                        >
                            Hide Details
                        </Button>
                    ) : (
                        <Button
                            onClick={() => setShowText(true)}
                            font_size='1rem'
                            padding='0'
                            margin='7px 0 12px'
                            height='30px'
                        >
                            Show Details
                        </Button>
                    )}
                </Wrapper>
            )}
        </>
    );
};

export default Description;
