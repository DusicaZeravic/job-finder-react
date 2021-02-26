import { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getJobById } from '../../service';
import { StyledInnerDiv, StyledJobInfo } from './StyledJobInfo';

const JobInfo = ({ jobs, user }) => {
    const [job, setJob] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        getJobById(id).then(res => {
            setJob(res.data);
        })
    }, []);

    return user ? (
        <StyledJobInfo>
            <StyledInnerDiv>
                <h1>{job?.title}</h1>
                <h3><Link to={`/jobs/${job?.id}/${job?.company_info.name}`}>{job?.company_info.name}</Link>, {job?.location}</h3>
                <h4>Level of experience : <span>{job?.seniority.charAt(0).toUpperCase() + job?.seniority.slice(1)}</span></h4>
                <p>{job?.job_description}</p>
                <p>If you are interested in this position you can contact us: <span>{job?.company_info.contact[0]}</span><span>{job?.company_info.contact[1]}</span></p>
            </StyledInnerDiv>
        </StyledJobInfo>
    )
    : 
    <Redirect to='/login' />
}

export default JobInfo
