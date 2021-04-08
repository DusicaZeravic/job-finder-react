import { Link } from 'react-router-dom';
import SavedJob from "./SavedJob"
import { StyledSavedJobs } from "./StyledSavedJobs"

const SavedJobs = ({ savedJobs }) => {
    return (
        <StyledSavedJobs>
            <div className="main-header">
                <p>Saved Jobs</p>
                <p>See all the ads you've saved in one place.</p>
            </div>
            {savedJobs.length !== 0 ? savedJobs.map(job => <SavedJob key={job._id} job={job} />) : <div className="saved-empty-msg">
                <p>There's no saved jobs on your profile!</p>
                <Link to="/jobs"><p>See job list</p></Link>
            </div>}
        </StyledSavedJobs>
    )
}

export default SavedJobs
