import { Link } from 'react-router-dom';
import { StyledRegisterBack, StyledRegisterBackContainer } from './StyledRegisterBack';

const BackRegister = () => {
    return (
        <StyledRegisterBack>
            <StyledRegisterBackContainer>
                <i className="far fa-check-circle"></i>
                <p>You have successfully registered! &#9787;</p>
                <span>Now, you're ready to </span><br></br><Link to='/login'>Login</Link>
            </StyledRegisterBackContainer>
        </StyledRegisterBack>
    )
}

export default BackRegister;
