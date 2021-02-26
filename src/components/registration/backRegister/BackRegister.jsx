import { Link } from 'react-router-dom';
import { StyledRegisterBack } from './StyledRegisterBack';

const BackRegister = () => {
    return (
        <StyledRegisterBack>
            <div>
                <i className="far fa-check-circle"></i>
                <p>You have successfully registered! &#9787;</p>
                <span>Now, you're ready to </span><br></br><Link to='/login'>Login</Link>
            </div>
        </StyledRegisterBack>
    )
}

export default BackRegister;
