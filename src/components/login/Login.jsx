import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUsers } from '../../service';
import { StyledLogin, StyledLoginForm, StyledLogo } from './StyledLogin';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const history = useHistory();

    const isValid = (user) => {
        if (email.trim() !== user?.email) {
            setEmailError('Incorrect email address!')
        } else {
            setEmailError('');
        }
        if (password.trim() !== user?.password) {
            setPasswordError('Incorrect password!')
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
            <StyledLoginForm onSubmit={(e) => {
                e.preventDefault();
                getUsers().then(res => {
                    let user = res.data.find(el => el.email === email && el.password === password);
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
                <h2>Sign in to your account</h2>
                <form>
                    <div>
                        <input type="text" placeholder="Enter email address..." onChange={(e) => setEmail(e.target.value)} />
                        <i className="far fa-user"></i>
                        <p className="error-msg">{emailError}</p>
                    </div>
                    <div>
                        <input type="password" placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)} />
                        <i className="fas fa-unlock-alt"></i>
                        <p className="error-msg">{passwordError}</p>
                    </div>
                    <div>
                        <input type="submit" value="Sign In" />
                    </div>
                    <Link to='/register'>Don't have an account? Sign Up Here!</Link>
                </form>
            </StyledLoginForm>
        </StyledLogin>

    )
}

export default Login
