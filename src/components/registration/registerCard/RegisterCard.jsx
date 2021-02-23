import { useState } from 'react';
import { StyledCard } from './StyledCard';

const RegisterCard = ({ Front, Back, isFront, setIsFront }) => {
    const [transform, setTransform] = useState('');

    const rotate = () => {
            setIsFront(false);
            setTransform('rotate');
    }

    return (
        <StyledCard className={transform}>
            {
                isFront ? <Front rotate={rotate} /> : <Back />
            }
        </StyledCard>
    )
}

export default RegisterCard