import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteJobById, updateUser } from '../../service';
import { StyledJobItem, StyledDeleteButton, StyledMessage, JobDescription, Overlay, StyledButtons } from './StyledJobItem';

const Job = ({ job, setJobs, user, savedJobs, setSavedJobs }) => {
    const [message, setMessage] = useState('');

    return (
        <StyledJobItem>
            <StyledMessage className="savedMessage">{message}</StyledMessage>
            <JobDescription className="text">
                <h3>{job.title}</h3>
                <Link to={`/jobs/${job._id}/${job.company_info.name}`}>{job.company_info.name}</Link>
                <div className="location"><i className="fas fa-map-marker-alt"></i><p>{job.location}</p></div>
                <div className="createdAt"><i className="fas fa-clock"></i><p>{job.createdAt}</p></div>
                <p>{job.snippet}</p>
            </JobDescription>
            <Overlay className="overlay">
                <StyledButtons>
                    <Link to={`/jobs/${job._id}`}><button><i className="fas fa-eye"></i></button></Link>
                    {user.role !== 'admin' ? <button onClick={() => {
                        user.savedJobs = [...user.savedJobs, job._id];
                        updateUser(user._id, user).then(() => {
                            console.log('updated!');
                            user = { ...user, savedJobs };
                            setMessage('Successfully saved on your profile!');
                            setTimeout(() => {
                                setMessage('');
                            }, 2000);
                        })
                    }}><i className="fas fa-heart"></i></button> : ''}
                    {user.role === 'admin' ? <StyledDeleteButton onClick={() => {
                        if (window.confirm('Are you sure you want to delete this record?')) {
                            deleteJobById(job._id).then(() => {
                                setJobs(previous => previous.filter(el => el.id !== job._id));
                            })
                        }
                    }}><i className="fas fa-trash-alt"></i></StyledDeleteButton> : ''}
                </StyledButtons>
            </Overlay>
        </StyledJobItem>
    )
}

export default Job
