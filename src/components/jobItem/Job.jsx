import { Link } from 'react-router-dom';
import { StyledJobItem } from './StyledJobItem';

const Job = ({ job }) => {
    return (
        <StyledJobItem>
            <h3>{job.title}</h3>
            <Link to={`/jobs/${job.id}/${job.company_info.name}`}>{job.company_info.name}</Link>
            <div className="location"><span><i className="fas fa-map-marker-alt"></i></span><p>{job.location}</p></div>
            <p>Created At: {job.createdAt}</p>
            <p>{job.snippet}</p>
            <Link to={`/jobs/${job.id}`}><button>See More</button></Link>
        </StyledJobItem>
    )
}

export default Job
