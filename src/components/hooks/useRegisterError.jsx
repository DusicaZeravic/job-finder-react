import { useState } from 'react';

export const useRegisterError= () => {
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmedPasswordError, setConfirmedPasswordError] = useState('');
    const [uniqueError, setUniqueError] = useState('');

    return [firstNameError, setFirstNameError, lastNameError, setLastNameError, emailError, setEmailError, passwordError, setPasswordError, confirmedPasswordError, setConfirmedPasswordError, uniqueError, setUniqueError];
}