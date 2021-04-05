import { useState, useEffect } from 'react';
import { getJobById } from "../../service"
import SavedJob from './SavedJob';
import SavedJobs from './SavedJobs';
import { StyledUser, StyledUserInfo } from "./StyledUser"

const User = ({ user }) => {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        user.savedJobs.map(job => getJobById(job)
            .then(res => setSaved(prev => [...prev, res.data])))
    }, [])

    console.log(saved)
    return (
        <StyledUser>
            <StyledUserInfo>
                <img src="/profile.png" alt="Profile" width="250px" />
                <p>{user.firstName} {user.lastName}</p>
            </StyledUserInfo>
            <SavedJobs savedJobs={saved}/>
        </StyledUser>
    )
}

export default User
