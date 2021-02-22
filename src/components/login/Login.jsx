import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUsers } from '../../service';
import { StyledLogin, StyledLoginForm, StyledLogo } from './StyledLogin';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

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
                        <div>
                            <p>Invalid Data.</p>
                            <Link to='/login'>Try Again!</Link>
                        </div>

                        console.log('Invalid Data');
                    }
                })
            }}>
                <StyledLogo>
                    <i className="fas fa-business-time"></i>
                </StyledLogo>
                <h2>Sign in to your account</h2>
                <form>
                    <div>
                        <input type="text" placeholder="Enter email..." onChange={(e) => setEmail(e.target.value)} />
                        <i className="far fa-user"></i>
                    </div>
                    <div>
                        <input type="password" placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)} />
                        <i className="fas fa-unlock-alt"></i>
                    </div>
                    <div>
                        <input type="submit" value="Sign In" />
                    </div>
                    <Link to='/register'>You don't have an account yet? Sign Up Here!</Link>
                </form>
            </StyledLoginForm>
        </StyledLogin>

    )
}

export default Login
