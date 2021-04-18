import { Link } from 'react-router-dom';
import { StyledSavedJob, StyledDate, StyledContent, VerticalLine } from "./StyledSavedJob"

const SavedJob = ({ job }) => {
    return (
        <StyledSavedJob>
            <StyledDate>
                <span><i className="far fa-calendar-alt"></i></span>
                <p>Application deadline: </p>
                <div>{job.createdAt}</div>
            </StyledDate>
            <VerticalLine className="v-line"></VerticalLine>
            <StyledContent>
                <Link to={`/jobs/${job._id}`}><h2>{job.title}</h2></Link>
                <Link to={`/jobs/${job._id}/${job.company_info.name}`}><h5>{job.company_info.name}</h5></Link>
                <p>{job.snippet}</p>
            </StyledContent>
        </StyledSavedJob>
    )
}

export default SavedJob
