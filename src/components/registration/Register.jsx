import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUsers, postUser } from '../../service';
import { StyledRegister } from './StyledRegister';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmedPasswordError, setConfirmedPasswordError] = useState('');
    const [uniqueError, setUniqueError] = useState('');

    const history = useHistory();

    const validateEmail = (email) => {
        const emailRegEx = /\S+@\S+\.\S+/;
        return email.match(emailRegEx);
    }

    const validatePassword = (password) => {
        const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return password.match(passwordRegEx);
    }

    const isValid = () => {
        if (firstName.trim() === '') {
            setFirstNameError('You must enter your first name!');
        } else {
            setFirstNameError('');
        }
        if (lastName.trim() === '') {
            setLastnameError('You must enter your last name!');
        } else {
            setLastnameError('');
        }
        if (!validateEmail(email)) {
            setEmailError('Invalid email format!')
        } else {
            setEmailError('');
        }
        if (!validatePassword(password)) {
            setPasswordError('Password must have 8 characters, at least one number and at least one letter!')
        } else {
            setPasswordError('');
        }
        if (confirmedPassword !== password) {
            setConfirmedPasswordError('Passwords do not match!')
        } else {
            setConfirmedPasswordError('');
        }
        if (firstName.trim() === '' || lastName.trim() === '' || !validateEmail(email) || !validatePassword(password) || confirmedPassword !== password) {
            return false;
        } else {
            return true;
        }
    }

    const generateId = (arr) => {
        const id = arr.length > 0 ? Math.max(...arr.map(user => user.id)) + 1 : 1;
        return id;
    }

    const clearAllInputs = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmedPassword('');
    }

    return (
        <StyledRegister>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!isValid()) {
                    return
                }
                getUsers().then(res => {
                    let newUser = {
                        id: generateId(res.data),
                        username: firstName + lastName.charAt(0),
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        confirm_password: confirmedPassword
                    };
                    if (!res.data.some(user => user.email === email)) {
                        postUser(newUser).then(() => {
                            setUniqueError('');
                            clearAllInputs();
                            history.push('/login');
                        })
                    } else {
                        setUniqueError('User with that email already exist!')
                    }
                })
            }}>
                <h2>Create an Account</h2>
                    <p className="unique-error">{uniqueError}</p>
                <ul>
                    <li>
                        <label htmlFor="first_name">First Name</label>
                        <input value={firstName} type="text" name="first_name" id="first-name" onChange={(e) => setFirstName(e.target.value)} />
                    </li>
                    <p className="error-msg">{firstNameError}</p>
                    <li>
                        <label htmlFor="last_name">Last Name</label>
                        <input value={lastName} type="text" name="last_name" id="last-name" onChange={(e) => setLastName(e.target.value)} />
                    </li>
                    <p className="error-msg">{lastNameError}</p>
                    <li>
                        <label htmlFor="email">E-mail</label>
                        <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </li>
                    <p className="error-msg">{emailError}</p>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input value={password} type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </li>
                    <p className="error-msg">{passwordError}</p>
                    <li>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input value={confirmedPassword} type="password" name="confirm_password" id="confirm_password" onChange={(e) => setConfirmedPassword(e.target.value)} />
                    </li>
                    <p className="error-msg">{confirmedPasswordError}</p>
                    <li>
                        <input type="submit" value="Sign Up" />
                    </li>
                </ul>
            </form>
        </StyledRegister>
    )
}

export default Register
