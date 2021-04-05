import { useState } from 'react';
import Job from '../jobItem/Job';
import Filter from '../Filter/Filter';
import { StyledCreateNew, StyledJobList } from './StyledJobList';
import { Redirect, useHistory } from 'react-router-dom';

const JobList = ({ allJobs, jobs, user, setJobs, savedJobs, setSavedJobs, pagination, jobsPerPage }) => {
    const [filterInput, setFilterInput] = useState('');
    const [location, setLocation] = useState('');
    const [level, setLevel] = useState('');

    const history = useHistory();

    let companies = Array.from(new Set(allJobs.map(job => job.company_info.name)));

    let filteredOptions = allJobs.filter(job =>
        (job.title.toLowerCase().includes(filterInput.toLowerCase()) ||
            job.category.toLowerCase().includes(filterInput.toLowerCase())) &&
        job.location === location &&
        job.seniority === level);

    return user ? (
        <StyledJobList>
            <div className="current-state">
                <p>Currently {allJobs.length} open work positions at {companies.length} companies.</p>
            </div>
            <Filter jobs={allJobs} setFilterInput={setFilterInput} setLocation={setLocation} setLevel={setLevel} />
            {user.role === 'admin' ? <StyledCreateNew><button onClick={() => history.push('/createjob')}>Create New</button></StyledCreateNew> : ''}
            {filterInput.trim() !== '' && location !== '' && level !== '' ?
                filteredOptions.map(job => <Job key={job._id} job={job} setJobs={setJobs} user={user} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />).length > 0 ?
                    filteredOptions.map(job => <Job key={job._id} job={job} setJobs={setJobs} user={user} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />)
                    :
                    <div className="empty-filter"><p>There's no result for this search!</p></div>
                :
                jobs.map(job => <Job key={job._id} job={job} setJobs={setJobs} user={user} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />)
            }
            {jobs.length > 0 || filteredOptions.length >=5 ? pagination : ''}
        </StyledJobList>
    )
        :
        <Redirect to='/login' />
}

export default JobList
