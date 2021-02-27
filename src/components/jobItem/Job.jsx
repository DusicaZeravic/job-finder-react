import { Link } from 'react-router-dom';
import { deleteJobById } from '../../service';
import { StyledJobItem, StyledDeleteButton } from './StyledJobItem';

const Job = ({ job, setJobs, user }) => {
    return (
        <StyledJobItem>
            <h3>{job.title}</h3>
            <Link to={`/jobs/${job.id}/${job.company_info.name}`}>{job.company_info.name}</Link>
            <div className="location"><span><i className="fas fa-map-marker-alt"></i></span><p>{job.location}</p></div>
            <p>Created At: {job.createdAt}</p>
            <p>{job.snippet}</p>
            <Link to={`/jobs/${job.id}`}><button>See More</button></Link>
            {user.role === 'admin' ? <StyledDeleteButton onClick={() => {
                deleteJobById(job.id).then(() => {
                    setJobs(prev => prev.filter(el => el.id !== job.id))
                })
            }}>Delete</StyledDeleteButton> : ''}
        </StyledJobItem>
    )
}

export default Job
