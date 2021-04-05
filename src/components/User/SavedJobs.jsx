import SavedJob from "./SavedJob"
import { StyledSavedJobs } from "./StyledSavedJobs"

const SavedJobs = ({ savedJobs }) => {
    return (
        <StyledSavedJobs>
            <div className="main-header">
                <h2>Saved Jobs</h2>
            </div>
            {savedJobs.map(job => <SavedJob key={job._id} job={job} />)}
        </StyledSavedJobs>
    )
}

export default SavedJobs
