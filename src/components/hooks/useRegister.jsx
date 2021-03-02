import { useState } from 'react';

export const useRegister = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    return [firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, confirmedPassword, setConfirmedPassword];
}