import { useState } from 'react';
import { StyledCard } from './StyledCard';

const RegisterCard = ({ Front, Back, isFront, setIsFront }) => {
    const [classRotate, setClassRotate] = useState('');

    const rotate = () => {
            setIsFront(false);
            setClassRotate('rotate');
    }

    return (
        <StyledCard className={classRotate}>
            {
                isFront ? <Front rotate={rotate} /> : <Back />
            }
        </StyledCard>
    )
}

export default RegisterCard