import { useState } from 'react';
import BackRegister from '../backRegister/BackRegister';
import FrontRegister from '../frontRegister/FrontRegister';
import RegisterCard from '../registerCard/RegisterCard';
import { StyledRegister } from './StyledRegister';

const Register = () => {
    const [front, setFront] = useState(true);

    return (
        <StyledRegister>
            <RegisterCard Front={FrontRegister} Back={BackRegister} isFront={front} setIsFront={setFront} />
        </StyledRegister>
    )
}

export default Register;

