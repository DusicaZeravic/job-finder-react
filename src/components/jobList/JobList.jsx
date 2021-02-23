import { useState } from 'react';
import Job from '../jobItem/Job';
import Filter from '../Filter/Filter';
import { StyledJobList } from './StyledJobList';
import { Redirect } from 'react-router-dom';

const JobList = ({ jobs, user }) => {
    // const [category, setCategory] = useState('');
    const [filterInput, setFilterInput] = useState('');
    const [location, setLocation] = useState('');
    const [level, setLevel] = useState('');

    let companies = Array.from(new Set(jobs.map(job => job.company_info.name)));
    
    let filteredOptions = jobs.filter(job =>
        (job.title.toLowerCase().includes(filterInput.toLowerCase()) || 
        job.category.toLowerCase().includes(filterInput.toLowerCase())) &&
        job.location === location &&
        job.level === level);

    return user ? (
        <StyledJobList>
            <div className="current-state">
                <p>Currently {jobs.length} open work positions for {companies.length} companies.</p>
            </div>
            {/* <Filter jobs={jobs} setCategory={setCategory} setLocation={setLocation} setLevel={setLevel} /> */}
            <Filter jobs={jobs} setFilterInput={setFilterInput} setLocation={setLocation} setLevel={setLevel} />
            {filterInput.trim() !== '' && location !== '' && level !== '' ?
                filteredOptions.map(job => <Job key={job.id} job={job} />).length > 0 ?
                    filteredOptions.map(job => <Job key={job.id} job={job} />) :
                    <div className="empty-filter"><p>There's no result for this search!</p></div> :
                jobs.map(job => <Job key={job.id} job={job} />)
            }
        </StyledJobList>
    )
        :
        <Redirect to='/login' />
}

export default JobList
