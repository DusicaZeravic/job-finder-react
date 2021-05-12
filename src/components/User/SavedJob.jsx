import { Link } from 'react-router-dom';
import { updateUser } from '../../service';
import { StyledSavedJob, StyledDate, StyledContent, VerticalLine, StyledDeleteDiv } from "./StyledSavedJob"

const SavedJob = ({ job, savedJobs, user }) => {
    return (
        <StyledSavedJob>
            <StyledDate>
                <span><i className="far fa-calendar-alt"></i></span>
                <p>Application deadline: </p>
                <div>{job.createdAt}</div>
            </StyledDate>
            <VerticalLine className="v-line"></VerticalLine>
            <StyledContent>
                <Link to={`/jobs/${job._id}`}><h3>{job.title}</h3></Link>
                <Link to={`/jobs/${job._id}/${job.company_info.name}`}><h5>{job.company_info.name}</h5></Link>
                {/* <p>{job.snippet}</p> */}
            </StyledContent>
            <VerticalLine className="v-line"></VerticalLine>
            <StyledDeleteDiv>
                <i onClick={() => {
                    console.log(savedJobs)
                    // user.savedJobs = savedJobs.filter(job => job !== job._id);
                    // updateUser(user._id, user)
                    //     .then(() => {
                    //         user = { ...user, savedJobs };
                    //         console.log('deleted');
                        // })
                }} className="fas fa-trash-alt"></i>
            </StyledDeleteDiv>
        </StyledSavedJob>
    )
}

export default SavedJob
