import { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Job from '../jobItem/Job';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination';
import { CurrentState, EmptyFilter, StyledCreateNew, StyledJobList } from './StyledJobList';
import { getAll } from '../../actions/jobs';

const JobList = ({ user, savedJobs, setSavedJobs }) => {
    const [filterInput, setFilterInput] = useState('');
    const [location, setLocation] = useState('');
    const [level, setLevel] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(5);

    const allJobs = useSelector(state => state.jobs);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getAll());
    })

    let companies = Array.from(new Set(allJobs.map(job => job.company_info.name)));

    let filteredOptions = allJobs.filter(job =>
        (job.title.toLowerCase().includes(filterInput.toLowerCase()) ||
            job.category.toLowerCase().includes(filterInput.toLowerCase())) &&
        job.location === location &&
        job.seniority === level);

    // Get current posts
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const jobs = allJobs.slice(indexOfFirstJob, indexOfLastJob);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const showPreviousPage = () => setCurrentPage(currentPage - 1);
    const showNextPage = () => setCurrentPage(currentPage + 1);

    return user ? (
        <StyledJobList>
            <CurrentState>
                <p>Currently {allJobs.length} open work positions at {companies.length} companies.</p>
            </CurrentState>
            <Filter jobs={allJobs} setFilterInput={setFilterInput} setLocation={setLocation} setLevel={setLevel} />
            {user.role === 'admin' ? <StyledCreateNew><button onClick={() => history.push('/createjob')}>Create New</button></StyledCreateNew> : ''}
            {filterInput.trim() !== '' && location !== '' && level !== '' ?
                filteredOptions.map(job => <Job key={job._id} job={job} user={user} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />).length > 0 ?
                    filteredOptions.map(job => <Job key={job._id} job={job} user={user} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />)
                    :
                    <EmptyFilter><p>There's no result for this search!</p></EmptyFilter>
                :
                jobs.map(job => <Job key={job._id} job={job} user={user} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />)
            }
            {jobs.length > 0 || filteredOptions.length >= 5 ? <Pagination current={currentPage} jobsPerPage={jobsPerPage} totalJobs={allJobs.length} paginate={paginate} showPreviousPage={showPreviousPage} showNextPage={showNextPage} /> : ''}
        </StyledJobList>
    )
        :
        <Redirect to='/login' />
}

export default JobList;
