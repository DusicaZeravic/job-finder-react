import { Link } from 'react-router-dom';
import { deleteJobById, updateUser } from '../../service';
import { StyledJobItem, StyledDeleteButton } from './StyledJobItem';

const Job = ({ job, setJobs, user, savedJobs, setSavedJobs }) => {
    return (
        <StyledJobItem>
            <h3>{job.title}</h3>
            <Link to={`/jobs/${job._id}/${job.company_info.name}`}>{job.company_info.name}</Link>
            <div className="location"><i className="fas fa-map-marker-alt"></i><p>{job.location}</p></div>
            <div className="createdAt"><i className="fas fa-clock"></i><p>{job.createdAt}</p></div>
            <p>{job.snippet}</p>
            <Link to={`/jobs/${job._id}`}><button>See More</button></Link>
            {user.role !== 'admin' ? <button onClick={() => {
                savedJobs.push(job._id);
                console.log(savedJobs);
                user = {...user, savedJobs};
                updateUser(user._id, user).then(() => {
                    console.log('updated!');
                })
                console.log(user);
            }}>Save</button> : ''}
            {user.role === 'admin' ? <StyledDeleteButton onClick={() => {
                if(window.confirm('Are you sure you want to delete this record?')){deleteJobById(job._id).then(() => {
                    setJobs(previous => previous.filter(el => el.id !== job._id));
                })}
            }}>Delete</StyledDeleteButton> : ''}
        </StyledJobItem>
    )
}

export default Job
