import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getAllUsers } from '../../actions/auth';
import { getUsers } from '../../service';
import { ErrorMessage, InputContainer, StyledForm, StyledLogin, StyledLoginFormDiv, StyledLogo, Title } from './StyledLogin';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const history = useHistory();

    useEffect(() => {
        dispatch(getAllUsers())
    })

    const isValid = (user) => {
        if (email.trim() !== user?.email) {
            setEmailError('Incorrect email address!');
        } else {
            setEmailError('');
        }
        if (password.trim() !== user?.password) {
            setPasswordError('Incorrect password!');
        } else {
            setPasswordError('');
        }
        if (email.trim() !== user?.email || password.trim() !== user?.password) {
            return false
        } else {
            return true;
        }
    }

    return (
        <StyledLogin>
            <StyledLoginFormDiv onSubmit={(e) => {
                e.preventDefault();
                getUsers().then(() => {
                    let user = users.find(el => el.email === email && el.password === password);
                    if (user) {
                        setUser(user);
                        history.push('/jobs');
                    } else {
                        isValid(user);
                    }
                })
            }}>
                <StyledLogo>
                    <i className="fas fa-business-time"></i>
                </StyledLogo>
                <Title>Sign in to your account</Title>
                <StyledForm>
                    <InputContainer>
                        <input type="text" placeholder="Enter email address..." onChange={(e) => setEmail(e.target.value)} />
                        <i className="far fa-user"></i>
                        <ErrorMessage>{emailError}</ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                        <input type="password" placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)} />
                        <i className="fas fa-unlock-alt"></i>
                        <ErrorMessage>{passwordError}</ErrorMessage>
                    </InputContainer>
                    <InputContainer>
                        <input type="submit" value="Sign In" />
                    </InputContainer>
                    <Link to='/register'>Don't have an account? Sign Up Here!</Link>
                </StyledForm>
            </StyledLoginFormDiv>
        </StyledLogin>

    )
}

export default Login
