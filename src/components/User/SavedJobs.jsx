import SavedJob from "./SavedJob"
import { StyledSavedJobs } from "./StyledSavedJobs"

const SavedJobs = ({ savedJobs }) => {
    return (
        <StyledSavedJobs>
            <div className="main-header">
                <p>Saved Jobs</p>
                <p>See all the ads you've saved in one place.</p>
            </div>
            {savedJobs.map(job => <SavedJob key={job._id} job={job} />)}
        </StyledSavedJobs>
    )
}

export default SavedJobs
