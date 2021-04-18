import { Link } from 'react-router-dom';
import SavedJob from "./SavedJob"
import { EmptyMessage, MainHeader, StyledSavedJobs } from "./StyledSavedJobs"

const SavedJobs = ({ savedJobs }) => {
    return (
        <StyledSavedJobs>
            <MainHeader>
                <p>Saved Jobs</p>
                <p>See all the ads you've saved in one place.</p>
            </MainHeader>
            {savedJobs.length !== 0 ? savedJobs.map(job => <SavedJob key={job._id} job={job} />) : <EmptyMessage>
                <p>There's no saved jobs on your profile!</p>
                <Link to="/jobs"><p>See job list</p></Link>
            </EmptyMessage>}
        </StyledSavedJobs>
    )
}

export default SavedJobs
