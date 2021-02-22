import { useState } from 'react';
import Job from '../jobItem/Job';
import Filter from '../Filter/Filter';
import { StyledJobList } from './StyledJobList';
import { Redirect } from 'react-router-dom';

const JobList = ({ jobs, user }) => {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [level, setLevel] = useState('');

    let companies = Array.from(new Set(jobs.filter(job => job.company_info.name)));
    let filteredOptions = jobs.filter(job => job.category === category && job.location === location && job.level === level);

    return user ? (
        <StyledJobList>
            <div className="current-state">
                <p>Currently {jobs.length} open work positions for {companies.length} companies.</p>
            </div>
            <Filter jobs={jobs} setCategory={setCategory} setLocation={setLocation} setLevel={setLevel} />
            {category !== '' && location !== '' && level !== '' ?
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
